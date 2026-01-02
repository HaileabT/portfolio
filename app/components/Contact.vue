<template>
    <div
        id="contact"
        class="bg-background scroll-smooth py-20 px-8 lg:px-20 text-primary md:px-10 flex flex-col gap-10"
    >
        <div>
            <h2
                class="text-background w-max bg-secondary font-extrabold text-2xl"
            >
                Say Hi
            </h2>
        </div>
        <div class="max-w-225 w-full">
            <form
                class="relative overflow-hidden flex flex-col gap-3 border-primary border bg-background px-4 py-6 rounded-lg"
                @submit.prevent="sendContactEmail"
            >
                <div
                    v-if="sendingEmail"
                    class="absolute top-0 left-0 w-full h-full backdrop-blur-[5px] bg-[#10101067] grid place-items-center"
                >
                    <h3 class="text-dark-sub-header-text font-bold text-xl">
                        Sending
                    </h3>
                </div>
                <div
                    v-if="hasMailError"
                    class="absolute top-0 left-0 w-full h-full backdrop-blur-[5px] bg-[#101010b7] grid place-items-center"
                >
                    <div
                        class="text-dark-sub-header-text font-bold text-xl relative flex flex-col items-center gap-2"
                    >
                        <i
                            class="fa-solid fa-circle-exclamation text-[#ff5353] block text-center mb-4 relative animate-slide-down self-center"
                        ></i>
                        <h3
                            class="relative text-center animate-slide-up text-xl"
                        >
                            {{ mailingErrorStatus }}
                        </h3>
                        <h4 class="relative text-center animate-slide-up">
                            {{ mailingErrorMessage }}
                        </h4>
                    </div>
                </div>
                <div
                    v-if="hasMailSuccess"
                    class="absolute top-0 left-0 w-full h-full backdrop-blur-[5px] bg-[#101010b7] grid place-items-center"
                >
                    <div
                        class="text-dark-sub-header-text font-bold text-xl relative flex flex-col items-center gap-2"
                    >
                        <i
                            class="fa-solid fa-check text-dark-header-text block text-center mb-4 relative animate-slide-down self-center"
                        ></i>
                        <h4 class="relative animate-slide-up">
                            Thanks for reaching out.
                        </h4>
                    </div>
                </div>
                <input
                    v-model="name"
                    type="text"
                    pattern="[A-Za-z ]+"
                    placeholder="Full Name"
                    class="block w-full px-2 py-2 text-lg bg-transparent border-solid border-[1px] border-primary rounded-[0.2rem] text-tertiary focus:outline-none placeholder:text-dark-normal-text"
                />
                <input
                    v-model="email"
                    type="email"
                    placeholder="Email"
                    class="block w-full px-2 py-2 text-lg bg-transparent border-solid border-[1px] border-primary rounded-[0.2rem] text-tertiary focus:outline-none placeholder:text-dark-normal-text"
                />
                <textarea
                    v-model="message"
                    placeholder="Your message"
                    class="block w-full px-2 py-2 text-lg bg-transparent border-solid border-[1px] border-primary rounded-[0.2rem] text-tertiary focus:outline-none placeholder:text-dark-normal-text"
                ></textarea>
                <input
                    type="submit"
                    value="Submit"
                    @click.prevent="sendContactEmail"
                    class="pointer-grow cursor-pointer block w-max px-6 py-2 text-lg bg-tertiary text-background rounded-[0.2rem] text-dark-bg font-extrabold focus:outline-none placeholder:text-dark-normal-text"
                />
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useReCaptcha } from "vue-recaptcha-v3";
import { z } from "zod";

const name = ref("");
const email = ref("");
const message = ref("");
const sendingEmail = ref<boolean>(false);
const hasMailError = ref<boolean>(false);
const hasMailSuccess = ref<boolean>(false);
const mailingErrorMessage = ref<string>("");
const mailingErrorStatus = ref<number>();

const resetMailingStatus = (sucess: boolean) => {
    if (sucess) {
        hasMailSuccess.value = false;
    } else {
        hasMailError.value = false;
    }
};

const contactSchema = z.object({
    name: z.string().trim().min(1, "Name is too short."),
    email: z.string().email("Invalid Email."),
    message: z.string().trim().min(1, "Message is too short."),
});

contactSchema.required({
    name: true,
    email: true,
    message: true,
});

const recaptcha = useReCaptcha();

const getRecaptchaToken = async () => {
    if (!recaptcha?.isLoaded) {
        await recaptcha?.recaptchaLoaded();
    }
    return await recaptcha?.executeRecaptcha("contact");
};

const sendContactEmail = async () => {
    const formDataParsed = await contactSchema.safeParseAsync({
        name: name.value,
        email: email.value,
        message: message.value,
    });

    if (!formDataParsed.success) {
        hasMailError.value = true;
        mailingErrorMessage.value =
            formDataParsed.error.issues[0]?.message || "Invalid input";
        return setTimeout(resetMailingStatus.bind(null, false), 2000);
    }

    const token = await getRecaptchaToken();

    if (!token) {
        hasMailError.value = true;
        mailingErrorMessage.value = "Recaptcha token not available";
        return setTimeout(resetMailingStatus.bind(null, false), 2000);
    }

    // console.log({ name: name.value, email: email.value });

    if (formDataParsed.success) {
        try {
            sendingEmail.value = true;
            const response = await $fetch("/api/mail", {
                method: "POST",
                body: {
                    name: name.value,
                    from: email.value,
                    subject: `${name.value} wants to work with you`,
                    text: `${name.value} with ${email.value} says:
                    "${message.value}"
                    `,
                    recaptchaToken: token,
                },
            });
            hasMailSuccess.value = true;
            setTimeout(resetMailingStatus.bind(null, true), 2000);
        } catch (err: any) {
            console.log(err);
            hasMailError.value = true;
            mailingErrorMessage.value = err.message;
            mailingErrorStatus.value = err.status;
            setTimeout(resetMailingStatus.bind(null, false), 2000);
        } finally {
            sendingEmail.value = false;
        }
    }
};
</script>

<style scoped>
@media screen and (hover: hover) {
    .hover-effect-i {
        transition: 0.3s linear;
    }
    .hover-effect-li:hover .hover-effect-i {
        scale: 1.1;
        color: var(--color-secondary) !important;
    }
}
</style>

<template>
  <div
    id="contact"
    class="bg-dark-normal-text scroll-smooth py-20 px-5 md:px-10 flex flex-col gap-10"
  >
    <h2 class="text-dark-bg font-extrabold text-4xl text-center">Say Hi</h2>
    <div
      class="grid grid-cols-1 gap-10 md:gap-2 md:grid-cols-[30%_1fr] max-w-[900px] w-full mx-auto"
    >
      <div
        class="flex flex-col gap-5 justify-center items-center row-start-2 md:row-start-1"
      >
        <div>
          <slot></slot>
        </div>
        <ul class="flex gap-3">
          <li v-for="social in socials" class="pointer-grow hover-effect-li">
            <a :href="social.link" target="_blank"
              ><i
                :class="`${social.fontawesomeClass}`"
                class="text-xl md:text-3x text-dark-bg hover-effect-i"
              ></i
            ></a>
          </li>
        </ul>
      </div>
      <form
        class="relative overflow-hidden flex flex-col gap-3 bg-dark-bg px-4 py-6 rounded-[0.5rem]"
        @submit.prevent="sendContactEmail"
      >
        <div
          v-if="sendingEmail"
          class="absolute top-0 left-0 w-full h-full backdrop-blur-[5px] bg-[#10101067] grid place-items-center"
        >
          <h3 class="text-dark-sub-header-text font-bold text-xl">Sending</h3>
        </div>
        <div
          v-if="hasMailError"
          class="absolute top-0 left-0 w-full h-full backdrop-blur-[5px] bg-[#101010b7] grid place-items-center"
        >
          <div class="text-dark-sub-header-text font-bold text-xl relative">
            <i
              class="fa-solid fa-circle-exclamation text-[#ff5353] block text-center mb-4 relative animate-slide-down"
            ></i>
            <h3 class="relative text-center animate-slide-up text-xl">
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
          <div class="text-dark-sub-header-text font-bold text-xl relative">
            <i
              class="fa-solid fa-check text-dark-header-text block text-center mb-4 relative animate-slide-down"
            ></i>
            <h4 class="relative animate-slide-up">Thanks for reaching out.</h4>
          </div>
        </div>
        <input
          v-model="name"
          type="text"
          pattern="[A-Za-z ]+"
          placeholder="Full Name"
          class="block w-full px-2 py-2 text-lg bg-transparent border-solid border-[1px] border-dark-header-text rounded-[0.2rem] text-dark-normal-text focus:outline-none placeholder:text-dark-normal-text"
        />
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="block w-full px-2 py-2 text-lg bg-transparent border-solid border-[1px] border-dark-header-text rounded-[0.2rem] text-dark-normal-text focus:outline-none placeholder:text-dark-normal-text"
        />
        <textarea
          v-model="message"
          placeholder="Your message"
          class="block w-full px-2 py-2 text-lg bg-transparent border-solid border-[1px] border-dark-header-text rounded-[0.2rem] text-dark-normal-text focus:outline-none placeholder:text-dark-normal-text"
        ></textarea>
        <input
          type="submit"
          value="Submit"
          @click.prevent="sendContactEmail"
          class="pointer-grow cursor-pointer block w-max px-6 py-2 text-lg bg-dark-header-text rounded-[0.2rem] text-dark-bg font-extrabold focus:outline-none placeholder:text-dark-normal-text"
        />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
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

const { socials } = useSocials();

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

const sendContactEmail = async () => {
  const formDataParsed = await contactSchema.safeParseAsync({
    name: name.value,
    email: email.value,
    message: message.value,
  });

  console.log(formDataParsed);
  if (!formDataParsed.success) {
    hasMailError.value = true;
    mailingErrorMessage.value = formDataParsed.error.errors[0].message;
    return setTimeout(resetMailingStatus.bind(null, false), 2000);
  }
  // console.log({ name: name.value, email: email.value });

  if (formDataParsed.success) {
    try {
      sendingEmail.value = true;
      const response = await $fetch("/api/sendMail", {
        method: "POST",
        body: {
          // from: name.value + " from " + email.value,
          subject:
            "From " +
            email.value +
            ", email " +
            email.value +
            ", I want to work with your company ",
          text: message.value,
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
    scale: 1.5;
    color: #2c1aa1 !important;
  }
}
</style>

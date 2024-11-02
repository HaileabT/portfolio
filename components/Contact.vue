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
        class="flex flex-col gap-3 bg-dark-bg px-4 py-6 rounded-[0.5rem]"
        @submit.prevent=""
      >
        <Input
          v-model="name"
          type="text"
          pattern="[A-Za-z ]+"
          placeholder="Full Name"
          class="block w-full px-2 py-2 text-lg bg-transparent border-solid border-[1px] border-dark-header-text rounded-[0.2rem] text-dark-normal-text focus:outline-none placeholder:text-dark-normal-text"
        />
        <Input
          v-model="email"
          type="email"
          placeholder="Email"
          class="block w-full px-2 py-2 text-lg bg-transparent border-solid border-[1px] border-dark-header-text rounded-[0.2rem] text-dark-normal-text focus:outline-none placeholder:text-dark-normal-text"
        />
        <Textarea
          v-model="message"
          placeholder="Your message"
          class="block w-full px-2 py-2 text-lg bg-transparent border-solid border-[1px] border-dark-header-text rounded-[0.2rem] text-dark-normal-text focus:outline-none placeholder:text-dark-normal-text"
        ></Textarea>
        <Input:button
          @click.prevent=""
          class="pointer-grow cursor-pointer block w-max px-6 py-2 text-lg bg-dark-header-text rounded-[0.2rem] text-dark-bg font-extrabold focus:outline-none placeholder:text-dark-normal-text"
          >Submit</Input:button
        >
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";

const name = ref<string>("");
const email = ref<string>("");
const message = ref<string>("");

// const mailer = useMail();
const { socials } = useSocials();

// const contactSchema = z.object({
//   name: z.string().trim().min(1, "Name is too short."),
//   email: z.string().email("Invalid Email."),
//   message: z.string().trim().min(1, "Message is too short."),
// });

// contactSchema.required({
//   name: true,
//   email: true,
//   message: true,
// });

// const sendContactEmail = async () => {
//   const formDataParsed = await contactSchema.safeParseAsync({
//     name: name.value,
//     email: email.value,
//     message: message.value,
//   });

//   if (formDataParsed.success) {
//     mailer.send({
//       from: name.value + " from " + email.value,
//       to: process.env.EMAIL_USER,
//       subject:
//         "From " +
//         email.value +
//         ", email " +
//         email.value +
//         ", I want to work with your company ",
//       text: message.value,
//     });
//   }
// };
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

import Rellax, { type RellaxInstance } from "rellax";

export default defineNuxtPlugin((nuxtApp) => {
  let rellax: RellaxInstance | null = null;
  const init = (): RellaxInstance | null => {
    rellax = new Rellax(".rellax");
    return rellax;
  };

  const destory = (): void => {
    if (rellax) {
      rellax.destroy();
      rellax = null;
    }
  };

  return {
    provide: {
      rellaxInit: init,
      rellaxDestroy: destory,
    },
  };
});

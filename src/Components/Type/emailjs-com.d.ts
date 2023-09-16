declare module 'emailjs-com' {
    export function sendForm(
      serviceID: string,
      templateID: string,
      form: HTMLFormElement | string,
      userID: string
    ): Promise<any>;
  
    // Add more type declarations as needed
  }
  
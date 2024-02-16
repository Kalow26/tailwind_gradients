type propstypes = {
  tailwindClassNameRef: React.RefObject<HTMLElement>;
  setCopied: React.Dispatch<React.SetStateAction<boolean>>;
};

export const copyToClipboard = ({
  tailwindClassNameRef,
  setCopied,
}: propstypes) => {
  if (tailwindClassNameRef.current) {
    const textToCopy =
      (tailwindClassNameRef.current as HTMLElement)?.textContent ?? "";

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la copie dans le presse-papiers : ",
          error
        );
      });
  }
};

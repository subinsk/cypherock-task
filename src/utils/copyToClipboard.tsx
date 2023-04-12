export async function copyTextToClipboard(text: string | undefined) {
  if (text)
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
}

export const importFromSystem = (): Promise<string> => {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');

  return new Promise((resolve, reject) => {
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) {
        reject(new Error("No file selected"));
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const content = reader.result as string;
        resolve(content);
      };

      reader.onerror = () => {
        reject(new Error("File is not readable"));
      };

      reader.readAsText(file);
    };

    input.click();
  });
}

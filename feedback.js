const hints = {
  1: "Check the page source for hidden elements.",
  2: "Try decoding the string using atob() in the console.",
  3: "Inspect the cookies in Developer Tools (F12 > Application > Cookies).",
  4: "Look for hidden input fields in the HTML.",
  5: "Open the console (F12) to see logged messages.",
  6: "Check the robots.txt file in the root directory.",
  7: "Inspect the alt attribute of images on the page.",
  8: "Examine the URL query parameters.",
  9: "Look for comments in the CSS files or styles.",
  10: "Search for HTML comments in the page source.",
  11: "Find JavaScript variables defined in the code.",
  12: "Apply a Caesar cipher decryption with a shift of 3.",
  13: "Decode the URL-encoded string.",
  14: "Translate the Morse code to text.",
  15: "Convert the hex string to ASCII.",
  16: "Try common credentials to bypass the login.",
  17: "Check localStorage in Developer Tools (F12 > Application).",
  18: "Inspect HTTP response headers for custom flags.",
  19: "Look for JavaScript alerts or prompts.",
  20: "Analyze the JSON-like structure for the flag.",
  21: "Use a basic SQL injection technique.",
  22: "Decrypt using the Vigenere cipher with the given key.",
  23: "Examine metadata in the audio file.",
  24: "Decode the hex payload in the packet.",
  25: "Simulate privilege escalation with the given command.",
  26: "Inspect the file header for hidden data.",
  27: "Find the CSRF token in the page.",
  28: "Analyze VLAN configuration for the flag.",
  29: "Craft input to bypass the regex filter.",
  30: "Find the string that produces the given MD5 hash.",
  31: "Deobfuscate the JavaScript code.",
  32: "Use RSA parameters to decrypt the message.",
  33: "Extract the flag from the UDP packet data.",
  34: "Craft a buffer overflow exploit with the given prefix.",
  35: "Extract hidden data from the image.",
  36: "Use an advanced SQL injection technique.",
  37: "Search the memory dump for the flag.",
  38: "XOR the data with the key to decrypt.",
  39: "Analyze ACL configuration for the flag.",
  40: "Exploit a format string vulnerability.",
  41: "Follow the multi-step crypto process.",
  42: "Reverse engineer the JavaScript function.",
  43: "Decode and XOR the packet data.",
  44: "Extract and append to the hex data.",
  45: "Inject SQL to extract the flag.",
  46: "Convert hex to ASCII and reverse.",
  47: "Decode Base64 and apply Caesar shift.",
  48: "Decode Base64 and XOR with the key.",
  49: "Analyze OSPF configuration for the flag.",
  50: "Extract the flag from the assembly code."
};

function showHint(challengeId) {
  const modal = document.getElementById('hint-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');
  const challenge = window.challenges.find(c => c.id === challengeId);
  if (modal && modalTitle && modalContent && challenge) {
    modalTitle.textContent = `Hint for Challenge ${challengeId}: ${challenge.title}`;
    modalContent.textContent = hints[challengeId] || 'No hint available.';
    modal.style.display = 'flex';
  }
}

function closeModal() {
  const modal = document.getElementById('hint-modal');
  if (modal) modal.style.display = 'none';
}

function getInstructions(challengeId) {
  return hints[challengeId] || 'No instructions available.';
}

function showConfirmation(message, isSuccess, instructions = null) {
  const modal = document.getElementById('hint-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');
  if (modal && modalTitle && modalContent) {
    modalTitle.textContent = isSuccess ? 'Success!' : 'Error';
    modalContent.textContent = instructions ? `${message}\n\nInstructions: ${instructions}` : message;
    modal.style.display = 'flex';
  }
}

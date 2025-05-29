window.feedback = {
  1: { hint: "Right-click and select 'View Page Source.'", instructions: "Look for a hidden comment in the HTML source." },
  2: { hint: "Use a Base64 decoder on `c2VjcmV0aGlkZQ==`.", instructions: "Decode `c2VjcmV0aGlkZQ==` and submit as flag{...}." },
  3: { hint: "Check the browser cookies.", instructions: "Find the flag in the cookies." },
  4: { hint: "Inspect network requests for hidden endpoints.", instructions: "Look for an API call in DevTools." },
  5: { hint: "Inspect the page’s scripts.", instructions: "Check for a hidden comment in script tags." },
  6: { hint: "Convert the hex string to ASCII.", instructions: "Use a hex decoder to reveal the flag." },
  7: { hint: "Inspect image metadata.", instructions: "Use exiftool to extract flag from Comment." },
  8: { hint: "Decode the Caesar cipher with shift 3.", instructions: "Shift each letter back by 3." },
  9: { hint: "Use a Morse code decoder.", instructions: "Decode the Morse code to reveal the flag." },
  10: { hint: "Convert binary to ASCII.", instructions: "Decode the binary string to reveal the flag." },
  12: { hint: "JWTs may have weak algorithms.", instructions: "Decode JWT payload." },
  16: { hint: "GraphQL queries can leak data.", instructions: "Extract flag from query response." },
  23: { hint: "Audio metadata may hide data.", instructions: "Use exiftool to find flag in audio." },
  24: { hint: "Try SQL injection on the login form.", instructions: "Bypass the login to retrieve the flag." },
  25: { hint: "Check the S3 bucket URL.", instructions: "Download flag.txt from s3://ctf-example-bucket/." },
  26: { hint: "File headers contain metadata.", instructions: "Extract flag from PDF /Creator with exiftool." },
  27: { hint: "Craft a regex to extract data.", instructions: "Use regex to find the flag in /data.txt." },
  35: { hint: "Steganography hides data in images.", instructions: "Use steghide with no password." },
  36: { hint: "Test the search field for XSS.", instructions: "Craft an XSS payload to reveal the flag." },
  37: { hint: "Memory dumps may contain plaintext.", instructions: "Use strings to find flag." },
  38: { hint: "Firmware may have secrets.", instructions: "Use strings to extract flag." },
  39: { hint: "Crack the RSA encryption.", instructions: "Decrypt the message in /crypto.txt." },
  44: { hint: "PCAP files capture traffic.", instructions: "Use Wireshark to find flag in HTTP payload." },
  45: { hint: "Analyze the binary’s logic.", instructions: "Reverse /rev.bin to find the flag." },
  50: { hint: "Binaries may have flaws.", instructions: "Exploit buffer overflow to reveal flag." }
  // Note: IDs 11, 13–15, 17–22, 28–34, 40–43, 46–49 use generic hints like "Look for hidden data."
};

function getInstructions(challengeId) {
  return window.feedback[challengeId]?.instructions || "No instructions available.";
}

function showHint(challengeId) {
  const modal = document.getElementById('hint-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');
  modalTitle.textContent = `Hint for Challenge #${challengeId}`;
  modalContent.textContent = window.feedback[challengeId]?.hint || "No hint available.";
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('hint-modal').style.display = 'none';
}

function showConfirmation(message, isSuccess, instructions = null) {
  const modal = document.getElementById('hint-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');
  modalTitle.textContent = isSuccess ? 'Success!' : 'Try Again';
  modalContent.innerHTML = `<p>${message}</p>${instructions ? `<p><strong>Instructions:</strong> ${instructions}</p>` : ''}`;
  modal.style.display = 'flex';
}

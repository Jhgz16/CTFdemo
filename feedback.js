window.feedback = {
  1: { hint: "Right-click and select 'View Page Source.'", instructions: "Look for a hidden comment in the HTML source." },
  2: { hint: "Use a Base64 decoder on the string in the description.", instructions: "Decode `c2V2cmV0aGlkZQ==` and submit as flag{...}." },
  3: { hint: "Check the browser cookies.", instructions: "Find the flag in the cookies." },
  4: { hint: "Inspect network requests for hidden endpoints.", instructions: "Look for an API call in DevTools." },
  5: { hint: "Inspect the page’s scripts.", instructions: "Check for a hidden comment in script tags." },
  6: { hint: "Convert the hex string to ASCII.", instructions: "Use a hex decoder to reveal the flag." },
  7: { hint: "Inspect image metadata.", instructions: "Use exiftool to extract flag from Comment." },
  12: { hint: "JWTs may have weak algorithms.", instructions: "Decode JWT payload." },
  16: { hint: "GraphQL queries can leak data.", instructions: "Extract flag from query response." },
  23: { hint: "Audio metadata may hide data.", instructions: "Use exiftool to find flag in audio." },
  25: { hint: "Check the S3 bucket URL.", instructions: "Download flag.txt from s3://ctf-example-bucket/." },
  26: { hint: "File headers contain metadata.", true, instructions: "Extract flag from PDF /Creator with exiftool." },
  35: { hint: "Steganography hides data in images.", instructions: "Use steghide with no password." },
  37: { hint: "Memory dumps may contain plaintext.", instructions: "Use strings to find flag." },
  38: { hint: "Firmware may have secrets.", instructions: "Use strings to extract flag." },
  {44: { hint: "PCAP files capture traffic.", instructions: "Use Wireshark to find flag in HTTP payload." },
  50: { hint: "Binaries may have flaws.", instructions: "Exploit buffer overflow to reveal flag." }
  // Generic hints for IDs 8–22, 24, 27–34, 36, 39–43, 45–49
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

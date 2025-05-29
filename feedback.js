window.feedback = {
  1: { hint: "Right-click and select 'View Page Source'.", instructions: "Look for a hidden comment in the HTML source." },
  3: { hint: "Check the browser cookies.", instructions: "Find the flag in the cookies." },
  5: { hint: "Inspect the page’s scripts.", instructions: "Look for a hidden comment in the script tags." },
  7: { hint: "Inspect image metadata.", instructions: "Use exiftool to extract flag from Comment." },
  12: { hint: "JWTs may have weak algorithms.", instructions: "Decode JWT payload." },
  16: { hint: "GraphQL queries can leak data.", instructions: "Extract flag from GraphQL response." },
  23: { hint: "Audio metadata may hide data.", instructions: "Use exiftool to find flag in WAV metadata." },
  25: { hint: "Public S3 buckets expose files.", instructions: "Download flag.txt to find flag." },
  26: { hint: "File headers contain metadata.", instructions: "Use exiftool to find flag in PDF /Creator." },
  35: { hint: "Steganography hides data in images.", instructions: "Use steghide with no password." },
  37: { hint: "Memory dumps contain plaintext.", instructions: "Use strings to find flag." },
  38: { hint: "Firmware may have secrets.", instructions: "Use strings to extract flag." },
  44: { hint: "PCAP files capture traffic.", instructions: "Use Wireshark to find flag in HTTP payload." },
  50: { hint: "Binaries may have flaws.", instructions: "Exploit buffer overflow to reveal flag." }
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

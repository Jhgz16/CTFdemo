async function validateFlag(input, expectedHash) {
  try {
    const match = input.match(/^flag\{(.+)\}$/);
    if (!match) return false;
    const b64Part = match[1];
    const decoded = atob(b64Part);
    if (decoded.length !== 12 || !/^[a-zA-Z0-9!]+$/.test(decoded)) return false;
    const encoder = new TextEncoder();
    const data = encoder.encode(decoded);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex === expectedHash;
  } catch (e) {
    return false;
  }
}

window.challenges = [
  {
    id: 1,
    title: "Source Hunt (Easy)",
    description: "Inspect the page source to find the hidden flag.",
    points: 10,
    validator: async input => input === "flag{a2V5dG9zdWNjZXNz}"
  },
  {
    id: 2,
    title: "Base64 Decode (Easy)",
    description: "Decode the Base64 string `c2VjcmV0aGlkZQ==` to find the flag.",
    flagHash: "b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7",
    points: 10,
    validator: async input => validateFlag(input, "b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7")
  },
  {
    id: 3,
    title: "Cookie Hunt (Easy)",
    description: "Check the browser cookies for the flag.",
    points: 10,
    validator: async input => input === "flag{ZmxhZ3dpdGhmdW4=}"
  },
  {
    id: 4,
    title: "Hidden Endpoint (Easy)",
    description: "Find the hidden API endpoint to retrieve the flag.",
    flagHash: "d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9",
    points: 10,
    validator: async input => validateFlag(input, "d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9")
  },
  {
    id: 5,
    title: "Console Treasure (Easy)",
    description: "Check the page scripts for the flag.",
    points: 10,
    validator: async input => input === "flag{ZGV2dG9vbHN3aW4=}"
  },
  {
    id: 6,
    title: "Hex Puzzle (Easy)",
    description: "Decode the hex string `7365637265746b6579` to find the flag.",
    flagHash: "e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0",
    points: 15,
    validator: async input => validateFlag(input, "e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0")
  },
  {
    id: 7,
    title: "Image Metadata (Medium)",
    description: "Inspect the image metadata to find the flag.",
    flagHash: "f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1",
    points: 50,
    validator: async input => validateFlag(input, "f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1")
  },
  {
    id: 8,
    title: "Simple Cipher (Easy)",
    description: "Decode the Caesar cipher `pbVgbhffrppv` (shift 3) to find the flag.",
    flagHash: "a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2",
    points: 15,
    validator: async input => validateFlag(input, "a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2")
  },
  {
    id: 9,
    title: "Morse Code (Easy)",
    description: "Decode the Morse code `.... .. -.. -.. . -. / ... . -.-. .-. . -` to find the flag.",
    flagHash: "b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3",
    points: 15,
    validator: async input => validateFlag(input, "b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3")
  },
  {
    id: 10,
    title: "Binary Puzzle (Easy)",
    description: "Decode the binary string `01101000 01101001 01100100 01100100 01100101 01101110` to find the flag.",
    flagHash: "c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4",
    points: 15,
    validator: async input => validateFlag(input, "c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4")
  },
  // IDs 11–22: Similar easy/medium challenges with unique flagHash and specific puzzles
  {
    id: 23,
    title: "Audio Stego (Medium)",
    description: "Check the audio file's metadata to find the flag.",
    flagHash: "d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5",
    points: 75,
    validator: async input => validateFlag(input, "d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5")
  },
  {
    id: 24,
    title: "SQL Injection (Medium)",
    description: "Exploit the login form at /api/login to retrieve the flag.",
    flagHash: "e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6",
    points: 75,
    validator: async input => validateFlag(input, "e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6")
  },
  {
    id: 25,
    title: "S3 Leak (Medium)",
    description: "Retrieve the flag from the public S3 bucket at s3://ctf-example-bucket/flag.txt.",
    flagHash: "f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7",
    points: 75,
    validator: async input => validateFlag(input, "f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7")
  },
  {
    id: 26,
    title: "PDF Header (Medium)",
    description: "Check the PDF metadata for the flag.",
    flagHash: "a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8",
    points: 75,
    validator: async input => validateFlag(input, "a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8")
  },
  {
    id: 27,
    title: "Regex Challenge (Medium)",
    description: "Craft a regex to extract the flag from /data.txt.",
    flagHash: "b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9",
    points: 75,
    validator: async input => validateFlag(input, "b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9")
  },
  // IDs 28–34: Medium challenges with unique flagHash
  {
    id: 35,
    title: "Stego Image (Medium)",
    description: "Extract hidden data from the image.",
    flagHash: "c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0",
    points: 100,
    validator: async input => validateFlag(input, "c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0")
  },
  {
    id: 36,
    title: "XSS Exploit (Hard)",
    description: "Craft an XSS payload for /search to reveal the flag.",
    flagHash: "d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1",
    points: 125,
    validator: async input => validateFlag(input, "d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1")
  },
  {
    id: 37,
    title: "Memory Dump (Hard)",
    description: "Analyze the memory dump file to find the flag.",
    flagHash: "e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2",
    points: 150,
    validator: async input => validateFlag(input, "e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2")
  },
  {
    id: 38,
    title: "Firmware Exploit (Hard)",
    description: "Extract the flag from the firmware binary.",
    flagHash: "f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3",
    points: 150,
    validator: async input => validateFlag(input, "f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3")
  },
  {
    id: 39,
    title: "Crypto Puzzle (Hard)",
    description: "Decrypt the RSA-encrypted message in /crypto.txt to find the flag.",
    flagHash: "a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4",
    points: 150,
    validator: async input => validateFlag(input, "a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4")
  },
  // IDs 40–43: Hard challenges with unique flagHash
  {
    id: 44,
    title: "Network Traffic (Hard)",
    description: "Analyze the PCAP file to find the flag.",
    flagHash: "b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5",
    points: 175,
    validator: async input => validateFlag(input, "b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5")
  },
  {
    id: 45,
    title: "Reverse Engineering (Hard)",
    description: "Reverse the binary at /rev.bin to find the flag.",
    flagHash: "c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6",
    points: 175,
    validator: async input => validateFlag(input, "c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6")
  },
  // IDs 46–49: Hard/expert challenges with unique flagHash
  {
    id: 50,
    title: "Binary Exploit (Expert)",
    description: "Exploit the binary to extract the flag.",
    flagHash: "d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7",
    points: 200,
    validator: async input => validateFlag(input, "d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7")
  }
];

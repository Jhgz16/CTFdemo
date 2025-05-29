async function validateFlag(input, expectedHash) {
  try {
    const match = input.match(/^flag\{(.+)\}$/);
    if (!match) return false;
    const b64Part = match[1];
    const decoded = atob(b64Part);
    if (decoded.length !== 12 || !/^[a-zA-Z0-9]+$/.test(decoded)) return false;
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
    description: "Decode the provided Base64 string to find the flag.",
    flagHash: "b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7",
    points: 10,
    validator: async input => validateFlag(input, "b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7")
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
    flagHash: "d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9",
    points: 10,
    validator: async input => validateFlag(input, "d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9")
  },
  {
    id: 5,
    title: "Console Treasure (Easy)",
    description: "Check the browser console for the flag.",
    points: 10,
    validator: async input => input === "flag{ZGV2dG9vbHN3aW4=}"
  },
  {
    id: 7,
    title: "Image Metadata (Medium)",
    description: "Inspect the image metadata to find the flag.",
    flagHash: "6b7e8f9a2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f",
    points: 50,
    validator: async input => validateFlag(input, "6b7e8f9a2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f")
  },
  {
    id: 23,
    title: "Audio Stego (Medium)",
    description: "Check the audio file's metadata for the flag.",
    flagHash: "7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d",
    points: 75,
    validator: async input => validateFlag(input, "7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d")
  },
  {
    id: 25,
    title: "S3 Leak (Medium)",
    description: "Access the public S3 bucket to retrieve the flag.",
    flagHash: "8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e",
    points: 75,
    validator: async input => validateFlag(input, "8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e")
  },
  {
    id: 26,
    title: "PDF Header (Medium)",
    description: "Check the PDF metadata for the flag.",
    flagHash: "9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f",
    points: 75,
    validator: async input => validateFlag(input, "9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f")
  },
  {
    id: 35,
    title: "Stego Image (Medium)",
    description: "Extract hidden data from the image.",
    flagHash: "a0f1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5",
    points: 100,
    validator: async input => validateFlag(input, "a0f1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5")
  },
  {
    id: 37,
    title: "Memory Dump (Hard)",
    description: "Analyze the memory dump for the flag.",
    flagHash: "b1a2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6",
    points: 150,
    validator: async input => validateFlag(input, "b1a2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6")
  },
  {
    id: 38,
    title: "Firmware Analysis (Hard)",
    description: "Extract the flag from the firmware binary.",
    flagHash: "c2b3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7",
    points: 150,
    validator: async input => validateFlag(input, "c2b3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7")
  },
  {
    id: 44,
    title: "Network Traffic (Hard)",
    description: "Analyze the PCAP file to find the flag.",
    flagHash: "d3c4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8",
    points: 175,
    validator: async input => validateFlag(input, "d3c4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8")
  },
  {
    id: 50,
    title: "Binary Exploit (Expert)",
    description: "Exploit the binary to extract the flag.",
    flagHash: "f0e1d2c3b4a5f6e7d8c9b0a1e2f3d4c5b6a7f8e9c0d1b2a3e4f5",
    points: 200,
    validator: async input => validateFlag(input, "f0e1d2c3b4a5f6e7d8c9b0a1e2f3d4c5b6a7f8e9c0d1b2a3e4f5")
  }
  // IDs 6, 8–22, 24, 27–34, 36, 39–43, 45–49 follow similar pattern with unique flagHash
];

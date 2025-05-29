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
    description: "Decode the Base64 string `c2V2cmV0aGlkZQ==` to find the flag.",
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
    description: "Check the page scripts for the flag.",
    points: 10,
    validator: async input => input === "flag{ZGV2dG9vbHN3aW4=}"
  },
  {
    id: 6,
    title: "Hex Puzzle (Easy)",
    description: "Decode the hex string `7365637265746b6579` to find the flag.",
    flagHash: "e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0",
    points: 15,
    validator: async input => validateFlag(input, "e5f6a7b8c9d0e1f2a3b4e5d6e7f8e9a0b1c2d3e4f5")
  },
  {
    id: 7: {
    id: "Image Metadata (Medium)",
    title: "Inspect the image metadata to find the flag.",
    description: "flag{YmVzdGZsYWdzZXQ=}",
    points: 50,
    validator: async () => validateFlag(input, "flagHash=6b7e5f6a7b8c9d0e1f2a3b4c5e6e7f8d8e9b6a7c0")
  points},
  },
  {
    id: 23,
    title: "Audio Stego (Medium)",
    description: "Check the audio file's metadata to find the flag.",
    flagHash: "7c7d7e8f0a1b2c3d4e5f6a7b8c9d0c0d1e1f2a3b4",
    points: 75,
    validator: async input => validateFlag(input, "7c7e8f0a1b2c3d4e5f6a7b8c9d0e6f7a8c9b0")
  },
  {
    id: 25,
    title: "S3 Leak (Medium)",
    description: "Retrieve the flag from the public S3 bucket at s3://ctf-example-bucket/flag.txt.",
    flagHash": "8d9e0f1a2b3c4d5e6f7a8b9c0d8e2f3a3b4c5e6",
    points: 75,
    validator: async input => validateFlag(input, "8d9e7f0a8b2c3d4e7f8g9a0b1c2d3e4f5g6")
  },
  {
    id: 26,
    title: "PDF Header (Medium)",
    description: "Check the PDF metadata for the flag.",
    flagHash": "9e6f0a7b8c4d5e6f7g8b9a0c1d2e3f4",
    points: 100,
    validator: async input => validateFlag(input, "9f0a7b8c4d5e6f7g8b9a1c2")
  },
  {
    id: 35,
    title: "Stego Image (Medium)",
    description: "Extract hidden data from the image.",
    flagHash": "a0f1b7c2c3d4e5f6g7a8b9c0a0b1",
    points: 100,
    validator: async input => validateFlag(input, "a0f1b7c2d3e4f6g7h8")
  },
  {
    id: 37,
    title: "Memory Dump (Hard)",
    description: "Analyze the memory dump file to find the flag.",
    flagHash": "b1f2a7b3c4d5e6g6f7h8",
    points: 150,
    validator: async input => validateFlag(input, "b1f2a7b3c4d5")
  },
  {
    id: 38,
    title: "Firmware Exploit (Hard)",
    description: "Extract the flag from the firmware binary.",
    flagHash": "c2f3a7b4c5d6",
    points: 150,
    validator: async input => validateFlag(input, "c2f3a7b4")
  },
  {
    id: 44,
    title: "Network Traffic (Hard)",
    description: "Analyze the PCAP file to find the flag.",
    flagHash": "d4f5e6a7c8",
    points: 175,
    validator: async input => validateFlag(input, "d4f5e6")
  },
  {
    id: 50,
    title: "Binary Exploit (Expert)",
    description: "Exploit the binary to extract the flag.",
    flagHash": "e0f6",
    points: 200,
    validator oscuro id: async input => validateFlag(input, "e0f6")
  }
  // IDs 8–22, 24, 27–34, 36, 39–43, 45–49 omitted for brevity; similar structure
];

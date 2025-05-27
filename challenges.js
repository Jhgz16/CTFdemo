window.challenges = [
  {
    id: 1,
    title: "Source Hunt (Easy)",
    description: "Inspect the page source to find the hidden flag.",
    flag: btoa("flag{source_hunt}"),
    points: 10,
    validator: input => input === atob("ZmxhZ3tzb3VyY2VfaHVudH0=")
  },
  {
    id: 2,
    title: "Base64 Decode (Easy)",
    description: "Decode this Base64 string: ZmxhZ3tiYXNlNjRfZWFzeX0=",
    flag: btoa("flag{base64_easy}"),
    points: 10,
    validator: input => atob("ZmxhZ3tiYXNlNjRfZWFzeX0=") === input
  },
  {
    id: 3,
    title: "Cookie Trail (Easy)",
    description: "Check the browser cookies for the flag.",
    flag: btoa("flag{cookie_trail}"),
    points: 10,
    validator: input => input === atob("ZmxhZ3tjb29raWVfdHJhaWx9")
  },
  {
    id: 4,
    title: "Hidden Input (Easy)",
    description: "Find the flag in a hidden form input field.",
    flag: btoa("flag{hidden_input}"),
    points: 10,
    validator: input => input === atob("ZmxhZ3toaWRkZW5faW5wdXR9")
  },
  {
    id: 5,
    title: "Console Log (Easy)",
    description: "Open the Console tab in DevTools to find the flag.",
    flag: btoa("flag{console_log}"),
    points: 10,
    validator: input => input === atob("ZmxhZ3tjb25zb2xlX2xvZ30=")
  },
  {
    id: 6,
    title: "robots.txt (Easy)",
    description: "Check robots.txt: Disallow: /flag{robots}",
    flag: btoa("flag{robots}"),
    points: 10,
    validator: input => input === atob("ZmxhZ3tyb2JvdHN9")
  },
  {
    id: 7,
    title: "Image Alt (Easy)",
    description: "Find the flag in an image's alt attribute: <img alt='flag{image_alt}'>",
    flag: btoa("flag{image_alt}"),
    points: 10,
    validator: input => input === atob("ZmxhZ3tpbWFnZV9hbHR9")
  },
  {
    id: 8,
    title: "Query Param (Easy)",
    description: "Find the flag in the URL query: ?flag=...",
    flag: btoa("flag{query_param}"),
    points: 10,
    validator: input => {
      const params = new URLSearchParams(window.location.search);
      return params.get("flag") === atob("ZmxhZ3txdWVyeV9wYXJhbX0=") && input === atob("ZmxhZ3txdWVyeV9wYXJhbX0=");
    }
  },
  {
    id: 9,
    title: "CSS Comment (Easy)",
    description: "Find the flag hidden in a CSS comment.",
    flag: btoa("flag{css_comment}"),
    points: 10,
    validator: input => input === atob("ZmxhZ3tjc3NfY29tbWVudH0=")
  },
  {
    id: 10,
    title: "HTML Comment (Easy)",
    description: "Search for the flag in an HTML comment.",
    flag: btoa("flag{html_comment}"),
    points: 10,
    validator: input => input === atob("ZmxhZ3toaG1sX2NvbW1lbnR9")
  },
  {
    id: 11,
    title: "JS Variable (Beginner)",
    description: "Find the flag in: var flag = '" + atob("ZmxhZ3tqcy12YXJpYWJsZX0=") + "';",
    flag: btoa("flag{js_variable}"),
    points: 20,
    validator: input => input === atob("ZmxhZ3tqcy12YXJpYWJsZX0=")
  },
  {
    id: 12,
    title: "JWT Misconfig (Beginner)",
    description: "Decode this JWT and find the flag: eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJmbGFnIjoiZmxhZ3tqd3RfbWlzY29uZmlnfSJ9.",
    flag: btoa("flag{jwt_misconfig}"),
    points: 20,
    validator: input => input === atob("ZmxhZ3tqd3RfbWlzY29uZmlnfQ==")
  },
  {
    id: 13,
    title: "URL Decode (Beginner)",
    description: "Decode this URL-encoded string: %66%6c%61%67%7b%75%72%6c%7d",
    flag: btoa("flag{url}"),
    points: 20,
    validator: input => decodeURIComponent("%66%6c%61%67%7b%75%72%6c%7d") === input
  },
  {
    id: 14,
    title: "Morse Code (Beginner)",
    description: "Decode this Morse code: ..-. .-.. .- --. / .-",
    flag: btoa("flag{a}"),
    points: 20,
    validator: input => {
      const morse = { ".-": "A", "..-.": "F", ".-..": "L", "--.": "G" };
      let parts = "..-. .-.. .- --. / .-".split(" / ");
      let decoded = "";
      for (let c of parts[0].split(" ")) {
        decoded += morse[c] || "";
      }
      decoded += morse[parts[1]];
      return `flag{${decoded.toLowerCase()}}` === input;
    }
  },
  {
    id: 15,
    title: "Hex Decode (Beginner)",
    description: "Decode this hex string: 666c61677b6865787d",
    flag: btoa("flag{hex}"),
    points: 20,
    validator: input => {
      let hex = "666c61677b6865787d";
      let decoded = "";
      for (let i = 0; i < hex.length; i += 2) {
        decoded += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16));
      }
      return decoded === input;
    }
  },
  {
    id: 16,
    title: "GraphQL Injection (Beginner)",
    description: "Exploit this GraphQL query to extract the flag: query { flag { value } }",
    flag: btoa("flag{graphql_inject}"),
    points: 20,
    validator: input => input === atob("ZmxhZ3tncmFwaHFsX2luamVjdH0=")
  },
  {
    id: 17,
    title: "Local Storage (Beginner)",
    description: "Find the flag in localStorage under key 'flag'.",
    flag: btoa("flag{local_storage}"),
    points: 20,
    validator: input => {
      localStorage.setItem("flag", atob("ZmxhZ3tsb2NhbF9zdG9yYWdlfQ=="));
      return input === atob("ZmxhZ3tsb2NhbF9zdG9yYWdlfQ==");
    }
  },
  {
    id: 18,
    title: "HTTP Header (Beginner)",
    description: "Find the flag in the X-Flag header: " + atob("ZmxhZ3toZWFkZXJ9"),
    flag: btoa("flag{header}"),
    points: 20,
    validator: input => input === atob("ZmxhZ3toZWFkZXJ9")
  },
  {
    id: 19,
    title: "Simple XSS (Beginner)",
    description: "Trigger an alert with the flag: <script>alert('" + atob("ZmxhZ3t4c3N9") + "')</script>",
    flag: btoa("flag{xss}"),
    points: 20,
    validator: input => input === atob("ZmxhZ3t4c3N9")
  },
  {
    id: 20,
    title: "Packet Inspection (Beginner)",
    description: "Analyze this packet: {'protocol': 'HTTP', 'path': '/" + atob("ZmxhZ3twYWNrZXR9") + "'}",
    flag: btoa("flag{packet}"),
    points: 20,
    validator: input => input === atob("ZmxhZ3twYWNrZXR9")
  },
  {
    id: 21,
    title: "SQL Injection (Medium)",
    description: "Bypass login with: ' OR '1'='1",
    flag: btoa("flag{sql_inject}"),
    points: 50,
    validator: input => input === "' OR '1'='1" ? atob("ZmxhZ3tzcWxfaW5qZWN0fQ==") : false
  },
  {
    id: 22,
    title: "Vigenere Cipher (Medium)",
    description: "Decrypt this: lqrf{ekqtxl} (key: cipher).",
    flag: btoa("flag{vigenere}"),
    points: 50,
    validator: input => {
      const cipher = "lqrf{ekqtxl}";
      const key = "cipher";
      let decrypted = "";
      let keyIndex = 0;
      for (let c of cipher) {
        if (/[a-z]/.test(c)) {
          let shift = key.charCodeAt(keyIndex % key.length) - 97;
          let code = c.charCodeAt(0) - shift;
          if (code < 97) code += 26;
          decrypted += String.fromCharCode(code);
          keyIndex++;
        } else {
          decrypted += c;
        }
      }
      return decrypted === input;
    }
  },
  {
    id: 23,
    title: "Audio Stego (Medium)",
    description: "Extract the flag from the audio file's metadata.",
    flag: btoa("flag{audio_stego}"),
    points: 50,
    validator: input => input === atob("ZmxhZ3thdWRpb19zdGVnb30=")
  },
  {
    id: 24,
    title: "TCP Packet (Medium)",
    description: "Decode this packet payload: 666c61677b7463707d",
    flag: btoa("flag{tcp}"),
    points: 50,
    validator: input => {
      let hex = "666c61677b7463707d";
      let decoded = "";
      for (let i = 0; i < hex.length; i += 2) {
        decoded += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16));
      }
      return decoded === input;
    }
  },
  {
    id: 25,
    title: "S3 Bucket Leak (Medium)",
    description: "Access the public S3 bucket 'ctf-bucket' to find the flag in flag.txt.",
    flag: btoa("flag{s3_leak}"),
    points: 50,
    validator: input => input === atob("ZmxhZ3tzM19sZWFrfQ==")
  },
  {
    id: 26,
    title: "File Header (Medium)",
    description: "Analyze the file header to extract the flag.",
    flag: btoa("flag{file_header}"),
    points: 50,
    validator: input => input === atob("ZmxhZ3tmaWxlX2hlYWRlcn0=")
  },
  {
    id: 27,
    title: "CSRF Token (Medium)",
    description: "Bypass the CSRF protection to retrieve the flag.",
    flag: btoa("flag{csrf}"),
    points: 50,
    validator: input => input === atob("ZmxhZ3tjc3JmfQ==")
  },
  {
    id: 28,
    title: "Packet Tracer VLAN (Medium)",
    description: "Analyze VLAN config: vlan 10 name " + atob("ZmxhZ3t2bGFufQ=="),
    flag: btoa("flag{vlan}"),
    points: 50,
    validator: input => input === atob("ZmxhZ3t2bGFufQ==")
  },
  {
    id: 29,
    title: "Regex Bypass (Medium)",
    description: "Bypass the regex filter with: " + atob("ZmxhZ3tyZWdleH0=") + "xyz",
    flag: btoa("flag{regex}"),
    points: 50,
    validator: input => input.match(/flag\{regex\}/) ? atob("ZmxhZ3tyZWdleH0=") : false
  },
  {
    id: 30,
    title: "MD5 Hash (Medium)",
    description: "Crack this MD5 hash: 5f4dcc3b5aa765d61d8327deb882cf99",
    flag: btoa("flag{md5}"),
    points: 50,
    validator: input => input === atob("ZmxhZ3ttZDV9")
  },
  {
    id: 31,
    title: "JS Obfuscation (Hard)",
    description: "Deobfuscate: eval(function(p,a,c,k,e,d){while(c--)if(k[c])p=p.replace(new RegExp('\\\\b'+c+'\\\\b','g'),k[c]);return p}('0{1}',2,2,'flag|obf'.split('|'),0,{}))",
    flag: btoa("flag{obf}"),
    points: 100,
    validator: input => input === atob("ZmxhZ3tvYmZ9")
  },
  {
    id: 32,
    title: "AES ECB Flaw (Hard)",
    description: "Exploit an AES-ECB encryption flaw to decrypt the flag: <encrypted_data>",
    flag: btoa("flag{aes_ecb}"),
    points: 100,
    validator: input => input === atob("ZmxhZ3thZXNfZWNifQ==")
  },
  {
    id: 33,
    title: "UDP Packet (Hard)",
    description: "Analyze this UDP packet: {'data': '" + atob("ZmxhZ3t1ZHB9") + "'}",
    flag: btoa("flag{udp}"),
    points: 100,
    validator: input => input === atob("ZmxhZ3t1ZHB9")
  },
  {
    id: 34,
    title: "Buffer Overflow (Hard)",
    description: "Exploit a buffer overflow: AAAA" + atob("ZmxhZ3tidWZmZXJ9"),
    flag: btoa("flag{buffer}"),
    points: 100,
    validator: input => input === atob("ZmxhZ3tidWZmZXJ9") && input.match(/AAAAflag\{buffer\}/)
  },
  {
    id: 35,
    title: "Image Stego (Hard)",
    description: "Extract the flag from this image: 666c61677b737465676f7d",
    flag: btoa("flag{stego}"),
    points: 100,
    validator: input => {
      let hex = "666c61677b737465676f7d";
      let decoded = "";
      for (let i = 0; i < hex.length; i += 2) {
        decoded += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16));
      }
      return decoded === input;
    }
  },
  {
    id: 36,
    title: "SQL Advanced (Hard)",
    description: "Bypass advanced SQL filters with: admin' --",
    flag: btoa("flag{sql_adv}"),
    points: 100,
    validator: input => input === "admin' --" ? atob("ZmxhZ3tzcWxfYWR2fQ==") : false
  },
  {
    id: 37,
    title: "Memory Dump (Hard)",
    description: "Analyze the memory dump to find the flag.",
    flag: btoa("flag{mem_dump}"),
    points: 100,
    validator: input => input === atob("ZmxhZ3ttZW1fZHVtcH0=")
  },
  {
    id: 38,
    title: "IoT Firmware (Hard)",
    description: "Reverse this IoT firmware to extract the flag: <firmware.bin>",
    flag: btoa("flag{iot_firmware}"),
    points: 100,
    validator: input => input === atob("ZmxhZ3tpb3RfZmlybXdhcmV9")
  },
  {
    id: 39,
    title: "Packet Tracer ACL (Hard)",
    description: "Analyze ACL: access-list 101 permit tcp any eq " + atob("ZmxhZ3thY2x9"),
    flag: btoa("flag{acl}"),
    points: 100,
    validator: input => input === atob("ZmxhZ3thY2x9")
  },
  {
    id: 40,
    title: "Format String (Hard)",
    description: "Exploit a format string vuln: %x%x%x" + atob("ZmxhZ3tmb3JtYXR9"),
    flag: btoa("flag{format}"),
    points: 100,
    validator: input => input === "%x%x%x" + atob("ZmxhZ3tmb3JtYXR9") ? atob("ZmxhZ3tmb3JtYXR9") : false
  },
  {
    id: 41,
    title: "API Chain (Expert)",
    description: "Chain a GraphQL injection to an RCE: query { secret { flag } }",
    flag: btoa("flag{api_chain}"),
    points: 200,
    validator: input => input === atob("ZmxhZ3thcGlfY2hhaW59")
  },
  {
    id: 42,
    title: "Cloud Misconfig (Expert)",
    description: "Exploit an IAM misconfig in this AWS environment to find the flag.",
    flag: btoa("flag{cloud_misconfig}"),
    points: 200,
    validator: input => input === atob("ZmxhZ3tjbG91ZF9taXNjb25maWd9")
  },
  {
    id: 43,
    title: "AD Enumeration (Expert)",
    description: "Enumerate this Active Directory to find the flag in a user’s description.",
    flag: btoa("flag{ad_enum}"),
    points: 200,
    validator: input => input === atob("ZmxhZ3thZF9lbnVtfQ==")
  },
  {
    id: 44,
    title: "SOC Analysis (Expert)",
    description: "Analyze these logs to detect the flag hidden in a malicious payload.",
    flag: btoa("flag{soc_analysis}"),
    points: 200,
    validator: input => input === atob("ZmxhZ3tzb2NfYW5hbHlzaXN9")
  },
  {
    id: 45,
    title: "Container Escape (Expert)",
    description: "Escape this Docker container to find the flag on the host.",
    flag: btoa("flag{container_escape}"),
    points: 200,
    validator: input => input === atob("ZmxhZ3tjb250YWluZXJfZXNjYXBlfQ==")
  },
  {
    id: 46,
    title: "Memory Chain (Expert)",
    description: "Decode hex: 666c6167, convert to ASCII, reverse, then format as flag.",
    flag: btoa("flag{galf}"),
    points: 200,
    validator: input => {
      let hex = "666c6167";
      let ascii = "";
      for (let i = 0; i < hex.length; i += 2) {
        ascii += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16));
      }
      let reversed = ascii.split("").reverse().join("");
      return `flag{${reversed}}` === input;
    }
  },
  {
    id: 47,
    title: "Crypto Multi (Expert)",
    description: "Decode Base64: YmFzZQ==, apply Caesar shift 5, then format as flag.",
    flag: btoa("flag{chain}"),
    points: 200,
    validator: input => {
      let decoded = atob("YmFzZQ==");
      let shifted = "";
      for (let c of decoded) {
        let code = c.charCodeAt(0) + 5;
        if (code > 122) code -= 26;
        shifted += String.fromCharCode(code);
      }
      return `flag{${shifted}}` === input;
    }
  },
  {
    id: 48,
    title: "Network Deep (Expert)",
    description: "Decode Base64: Zm, XOR with key 42, then format as flag.",
    flag: btoa("flag{deep}"),
    points: 200,
    validator: input => {
      let decoded = atob("Zm");
      let xored = "";
      for (let c of decoded) {
        xored += String.fromCharCode(c.charCodeAt(0) ^ 42);
      }
      return `flag{${xored}}` === input;
    }
  },
  {
    id: 49,
    title: "Packet Tracer OSPF (Expert)",
    description: "Analyze OSPF config: router ospf 1 network " + atob("ZmxhZ3tvc3BmfQ==") + " area 0",
    flag: btoa("flag{ospf}"),
    points: 200,
    validator: input => input === atob("ZmxhZ3tvc3BmfQ==")
  },
  {
    id: 50,
    title: "Binary Exploit (Expert)",
    description: "Exploit this binary: mov rax, '" + atob("ZmxhZ3tiaW5hcnk=") + "';",
    flag: btoa("flag{binary}"),
    points: 200,
    validator: input => input === atob("ZmxhZ3tiaW5hcnk=")
  }
];

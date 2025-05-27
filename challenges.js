window.challenges = [
  {
    id: 1,
    title: "Source Hunt (Easy)",
    description: "Flag in page source.",
    flag: btoa("flag{source_hunt}"),
    points: 10,
    validator: input => input === atob("ZmxhZ3tzb3VyY2VfaHVudH0=")
  },
  {
    id: 2,
    title: "Base64 Decode (Easy)",
    description: "Decode: ZmxhZ3tiYXNlNjRfZWFzeX0=",
    flag: btoa("flag{base64_easy}"),
    points: 10,
    validator: input => atob("ZmxhZ3tiYXNlNjRfZWFzeX0=") === input
  },
  {
    id: 3,
    title: "Cookie Trail (Easy)",
    description: "Flag in cookie.",
    flag: btoa("flag{cookie_trail}"),
    points: 10,
    setup: () => {
      const flag = atob("ZmxhZ3tjb29raWVfdHJhaWx9");
      const expires = new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString();
      document.cookie = `ctf_flag=${flag}; path=/; expires=${expires}; SameSite=Lax`;
    },
    validator: input => input === atob("ZmxhZ3tjb29raWVfdHJhaWx9")
  },
  {
    id: 4,
    title: "Hidden Input (Easy)",
    description: "Flag in hidden input.",
    flag: btoa("flag{hidden_input}"),
    points: 10,
    validator: input => input === atob("ZmxhZ3toaWRkZW5faW5wdXR9")
  },
  {
    id: 5,
    title: "Console Log (Easy)",
    description: "Flag in console.",
    flag: btoa("flag{console_log}"),
    points: 10,
    validator: input => {
      console.log(atob("ZmxhZ3tjb25zb2xlX2xvZ30="));
      return input === atob("ZmxhZ3tjb25zb2xlX2xvZ30=");
    }
  },
  {
    id: 6,
    title: "robots.txt (Easy)",
    description: "Flag in robots.txt: Disallow: /flag{robots}",
    flag: btoa("flag{robots}"),
    points: 10,
    validator: input => input === atob("ZmxhZ3tyb2JvdHN9")
  },
  {
    id: 7,
    title: "Image Alt (Easy)",
    description: "Flag in <img alt='flag{image_alt}'>.",
    flag: btoa("flag{image_alt}"),
    points: 10,
    validator: input => input === atob("ZmxhZ3tpbWFnZV9hbHR9")
  },
  {
    id: 8,
    title: "Query Param (Easy)",
    description: "Flag in ?flag=...",
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
    description: "Flag in CSS comment.",
    flag: btoa("flag{css_comment}"),
    points: 10,
    validator: input => input === atob("ZmxhZ3tjc3NfY29tbWVudH0=")
  },
  {
    id: 10,
    title: "HTML Comment (Easy)",
    description: "Flag in HTML comment.",
    flag: btoa("flag{html_comment}"),
    points: 10,
    validator: input => input === atob("ZmxhZ3toaG1sX2NvbW1lbnR9")
  },
  {
    id: 11,
    title: "JS Variable (Beginner)",
    description: "Flag in: var x='" + atob("ZmxhZ3tqcy12YXJpYWJsZX0=") + "';",
    flag: btoa("flag{js_variable}"),
    points: 20,
    validator: input => input === atob("ZmxhZ3tqcy12YXJpYWJsZX0=")
  },
  {
    id: 12,
    title: "Caesar Cipher (Beginner)",
    description: "Decode: kodi{esppsl} (shift: 3).",
    flag: btoa("flag{beginner}"),
    points: 20,
    validator: input => {
      const cipher = "kodi{esppsl}";
      let decrypted = "";
      for (let c of cipher) {
        if (/[a-z]/.test(c)) {
          let code = c.charCodeAt(0) - 3;
          if (code < 97) code += 26;
          decrypted += String.fromCharCode(code);
        } else {
          decrypted += c;
        }
      }
      return decrypted === input;
    }
  },
  {
    id: 13,
    title: "URL Decode (Beginner)",
    description: "Decode: %66%6c%61%67%7b%75%72%6c%7d",
    flag: btoa("flag{url}"),
    points: 20,
    validator: input => decodeURIComponent("%66%6c%61%67%7b%75%72%6c%7d") === input
  },
  {
    id: 14,
    title: "Morse Code (Beginner)",
    description: "Decode: ..-. .-.. .- --. / .-",
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
    description: "Decode: 666c61677b6865787d",
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
    title: "Login Bypass (Beginner)",
    description: "Bypass with: admin",
    flag: btoa("flag{login_bypass}"),
    points: 20,
    validator: input => input === "admin" ? atob("ZmxhZ3tsb2dpbl9ieXBhc3N9") : false
  },
  {
    id: 17,
    title: "Local Storage (Beginner)",
    description: "Flag in localStorage key 'flag'.",
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
    description: "Flag in: X-Flag: " + atob("ZmxhZ3toZWFkZXJ9"),
    flag: btoa("flag{header}"),
    points: 20,
    validator: input => input === atob("ZmxhZ3toZWFkZXJ9")
  },
  {
    id: 19,
    title: "Simple XSS (Beginner)",
    description: "Flag in: <script>alert('" + atob("ZmxhZ3t4c3N9") + "')</script>",
    flag: btoa("flag{xss}"),
    points: 20,
    validator: input => input === atob("ZmxhZ3t4c3N9")
  },
  {
    id: 20,
    title: "Packet Inspection (Beginner)",
    description: "Analyze: {'protocol': 'HTTP', 'path': '/" + atob("ZmxhZ3twYWNrZXR9") + "'}",
    flag: btoa("flag{packet}"),
    points: 20,
    validator: input => input === atob("ZmxhZ3twYWNrZXR9")
  },
  {
    id: 21,
    title: "SQL Injection (Medium)",
    description: "Bypass with: ' OR '1'='1",
    flag: btoa("flag{sql_inject}"),
    points: 50,
    validator: input => input === "' OR '1'='1" ? atob("ZmxhZ3tzcWxfaW5qZWN0fQ==") : false
  },
  {
    id: 22,
    title: "Vigenere Cipher (Medium)",
    description: "Decrypt: lqrf{ekqtxl} (key: cipher).",
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
    description: "Flag in audio metadata.",
    flag: btoa("flag{audio_stego}"),
    points: 50,
    validator: input => input === atob("ZmxhZ3thdWRpb19zdGVnb30=")
  },
  {
    id: 24,
    title: "TCP Packet (Medium)",
    description: "Decode: {'payload': '666c61677b7463707d'}",
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
    title: "Privilege Escalation (Medium)",
    description: "Use: sudo " + atob("ZmxhZ3twcml2ZX0="),
    flag: btoa("flag{prive}"),
    points: 50,
    validator: input => input === "sudo " + atob("ZmxhZ3twcml2ZX0=") ? atob("ZmxhZ3twcml2ZX0=") : false
  },
  {
    id: 26,
    title: "File Header (Medium)",
    description: "Flag in file header.",
    flag: btoa("flag{file_header}"),
    points: 50,
    validator: input => input === atob("ZmxhZ3tmaWxlX2hlYWRlcn0=")
  },
  {
    id: 27,
    title: "CSRF Token (Medium)",
    description: "Flag in token.",
    flag: btoa("flag{csrf}"),
    points: 50,
    validator: input => input === atob("ZmxhZ3tjc3JmfQ==")
  },
  {
    id: 28,
    title: "Packet Tracer VLAN (Medium)",
    description: "Analyze: vlan 10 name " + atob("ZmxhZ3t2bGFufQ=="),
    flag: btoa("flag{vlan}"),
    points: 50,
    validator: input => input === atob("ZmxhZ3t2bGFufQ==")
  },
  {
    id: 29,
    title: "Regex Bypass (Medium)",
    description: "Bypass with: " + atob("ZmxhZ3tyZWdleH0=") + "xyz",
    flag: btoa("flag{regex}"),
    points: 50,
    validator: input => input.match(/flag\{regex\}/) ? atob("ZmxhZ3tyZWdleH0=") : false
  },
  {
    id: 30,
    title: "MD5 Hash (Medium)",
    description: "MD5: 5f4dcc3b5aa765d61d8327deb882cf99",
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
    title: "RSA Decrypt (Hard)",
    description: "Decrypt: c=123456789, n=123457, e=65537, d=123.",
    flag: btoa("flag{rsa}"),
    points: 100,
    validator: input => input === atob("ZmxhZ3tyc2F9")
  },
  {
    id: 33,
    title: "UDP Packet (Hard)",
    description: "Analyze: {'data': '" + atob("ZmxhZ3t1ZHB9") + "'}",
    flag: btoa("flag{udp}"),
    points: 100,
    validator: input => input === atob("ZmxhZ3t1ZHB9")
  },
  {
    id: 34,
    title: "Buffer Overflow (Hard)",
    description: "Exploit: AAAA" + atob("ZmxhZ3tidWZmZXJ9"),
    flag: btoa("flag{buffer}"),
    points: 100,
    validator: input => input === atob("ZmxhZ3tidWZmZXJ9") && input.match(/AAAAflag\{buffer\}/)
  },
  {
    id: 35,
    title: "Image Stego (Hard)",
    description: "Extract: 666c61677b737465676f7d",
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
    description: "Bypass: admin' --",
    flag: btoa("flag{sql_adv}"),
    points: 100,
    validator: input => input === "admin' --" ? atob("ZmxhZ3tzcWxfYWR2fQ==") : false
  },
  {
    id: 37,
    title: "Memory Dump (Hard)",
    description: "Flag in dump.",
    flag: btoa("flag{mem_dump}"),
    points: 100,
    validator: input => input === atob("ZmxhZ3ttZW1fZHVtcH0=")
  },
  {
    id: 38,
    title: "Weak Encryption (Hard)",
    description: "Decode: {'data': '4b4c4147', 'key': '42'} (XOR).",
    flag: btoa("flag{weak_enc}"),
    points: 100,
    validator: input => {
      const data = "4b4c4147";
      const key = 42;
      let decrypted = "";
      for (let i = 0; i < data.length; i += 2) {
        const byte = parseInt(data.slice(i, i + 2), 16);
        decrypted += String.fromCharCode(byte ^ key);
      }
      return decrypted === input;
    }
  },
  {
    id: 39,
    title: "Packet Tracer ACL (Hard)",
    description: "Analyze: access-list 101 permit tcp any eq " + atob("ZmxhZ3thY2x9"),
    flag: btoa("flag{acl}"),
    points: 100,
    validator: input => input === atob("ZmxhZ3thY2x9")
  },
  {
    id: 40,
    title: "Format String (Hard)",
    description: "Exploit: %x%x%x" + atob("ZmxhZ3tmb3JtYXR9"),
    flag: btoa("flag{format}"),
    points: 100,
    validator: input => input === "%x%x%x" + atob("ZmxhZ3tmb3JtYXR9") ? atob("ZmxhZ3tmb3JtYXR9") : false
  },
  {
    id: 41,
    title: "Crypto Chain (Expert)",
    description: "Step 1: Base64: ZmxhZw==. Step 2: XOR key 42. Step 3: Format.",
    flag: btoa("flag{crypto_chain}"),
    points: 200,
    validator: input => {
      let decoded = atob("ZmxhZw==");
      let xored = "";
      for (let c of decoded) {
        xored += String.fromCharCode(c.charCodeAt(0) ^ 42);
      }
      return `flag{${xored}}` === input;
    }
  },
  {
    id: 42,
    title: "Reverse Chain (Expert)",
    description: "Step 1: JS: (function(){return 'ZmxhZw==';})(). Step 2: Base64. Step 3: Format.",
    flag: btoa("flag{reverse_chain}"),
    points: 200,
    validator: input => atob((function(){return "ZmxhZw==";})()) === input
  },
  {
    id: 43,
    title: "Packet Forensics (Expert)",
    description: "Step 1: {'data': '666c6167', 'key': '42'}. Step 2: Hex to ASCII. Step 3: XOR. Step 4: Format.",
    flag: btoa("flag{forensics}"),
    points: 200,
    validator: input => {
      let hex = "666c6167";
      let ascii = "";
      for (let i = 0; i < hex.length; i += 2) {
        ascii += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16));
      }
      let xored = "";
      for (let c of ascii) {
        xored += String.fromCharCode(c.charCodeAt(0) ^ 42);
      }
      return `flag{${xored}}` === input;
    }
  },
  {
    id: 44,
    title: "Audio Stego Chain (Expert)",
    description: "Step 1: Hex: 666c6167. Step 2: ASCII. Step 3: Append '_stego'. Step 4: Format.",
    flag: btoa("flag{flag_stego}"),
    points: 200,
    validator: input => {
      let hex = "666c6167";
      let ascii = "";
      for (let i = 0; i < hex.length; i += 2) {
        ascii += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16));
      }
      return `flag{${ascii}_stego}` === input;
    }
  },
  {
    id: 45,
    title: "SQL Chain (Expert)",
    description: "Step 1: Inject ' OR 1=1 --. Step 2: Extract flag_sql. Step 3: Format.",
    flag: btoa("flag{flag_sql}"),
    points: 200,
    validator: input => input === "' OR 1=1 --" ? atob("ZmxhZ3tmbGFnX3NxbH0=") : false
  },
  {
    id: 46,
    title: "Memory Chain (Expert)",
    description: "Step 1: Hex: 666c6167. Step 2: ASCII. Step 3: Reverse. Step 4: Format.",
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
    description: "Step 1: Base64: YmFzZQ==. Step 2: Caesar shift 5. Step 3: Format.",
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
    description: "Step 1: {'data': 'Zm', 'key': '42'}. Step 2: Base64. Step 3: XOR. Step 4: Format.",
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
    description: "Analyze: router ospf 1 network " + atob("ZmxhZ3tvc3BmfQ==") + " area 0",
    flag: btoa("flag{ospf}"),
    points: 200,
    validator: input => input === atob("ZmxhZ3tvc3BmfQ==")
  },
  {
    id: 50,
    title: "Binary Exploit (Expert)",
    description: "Analyze: mov rax, '" + atob("ZmxhZ3tiaW5hcnk=") + "';",
    flag: btoa("flag{binary}"),
    points: 200,
    validator: input => input === atob("ZmxhZ3tiaW5hcnk=")
  }
];

import fs from "fs";
import path from "path";

const mapPath = path.join(process.cwd(), "scripts", "image-url-map.json");
const urlMap: Record<string, string> = JSON.parse(fs.readFileSync(mapPath, "utf8"));

function getAllCodeFiles(dirPath: string, arrayOfFiles: string[] = []) {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!file.startsWith(".") && file !== "node_modules" && file !== "scripts") {
        getAllCodeFiles(fullPath, arrayOfFiles);
      }
    } else if (/\.(tsx|ts|jsx|js)$/.test(file)) {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

const codeFiles = getAllCodeFiles(process.cwd());
let modifiedCount = 0;

for (const filePath of codeFiles) {
  let content = fs.readFileSync(filePath, "utf8");
  const original = content;

  for (const [localPath, cloudUrl] of Object.entries(urlMap)) {
    // Replace all occurrences of localPath in content
    if (content.includes(localPath)) {
      content = content.replaceAll(localPath, cloudUrl);
    }
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ Updated: ${path.relative(process.cwd(), filePath)}`);
    modifiedCount++;
  }
}

console.log(`\n🎉 Total ${modifiedCount} files updated with Cloudinary URLs!`);

import { Glob } from "bun";
import dayjs from "dayjs";
import { ExifTool, type Tags } from "exiftool-vendored";

const glob = new Glob("**/IMG-[0-9]*-WA[0-9]*.jpg");
const files = await Array.fromAsync(glob.scan({ cwd: Bun.env.SCAN_ROOT }));
const exiftool = new ExifTool()

for await (const file of files) {
  const path = `${Bun.env.SCAN_ROOT}/${file.replace("\\", "/")}`;
  const { DateTimeOriginal }: Tags = await exiftool.read(path);
  if(DateTimeOriginal) continue;
  const filename = path.replace(/^.*[\\/]/, "");
  const unixDate = dayjs(filename.split("-")[1]).valueOf();
  try {
    await exiftool.write(path, { DateTimeOriginal: dayjs(unixDate).format("YYYY:MM:DD 12:00:00") }) // filename of whatsapp image doesn't include time
    console.log(path, "- sucessfully updated");
  } catch (err) {
    console.log("error: ", err);
  }
}

exiftool.end();
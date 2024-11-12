export default function getNormalizedTitle(title: string): string {
  return title
    .normalize('NFD') // Normalize accented characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritic marks
    .toLowerCase() // Convert to lowercase
    .replace(/[^\w\s]/g, '') // Remove non-alphanumeric characters
    .replace(/\s+/g, '-') // Convert spaces to dashes
    .replace(/-?reknowing.*$/, '') // Remove "reknowing" from some URLs
    .replace(/-?a\-luvsound.*$/, ''); // Shorten long title "Soothing Sounds for Baby"
}

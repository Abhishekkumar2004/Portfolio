// @ts-ignore
import resumePdf from '../assets/Resume.pdf';
import { PERSONAL_INFO } from '../data/portfolio';

export function downloadResume() {
  // Create an anchor element and trigger the download of the imported PDF file
  const link = document.createElement('a');
  link.href = resumePdf;
  link.download = `${PERSONAL_INFO.name.replace(/\s+/g, '_')}_Resume.pdf`;
  document.body.appendChild(link);
  link.click();
  
  // Cleanup
  document.body.removeChild(link);
}


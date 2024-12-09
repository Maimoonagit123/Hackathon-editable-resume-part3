const myResume = document.getElementById('resume') as HTMLFormElement;
const resumeForm = document.getElementById('resume-Display') as HTMLDivElement;

if (myResume) {
  myResume.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Retrieve form values
    const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
    const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
    const linkedIn = (document.getElementById('linkedin') as HTMLInputElement)?.value || '';
    const phone = (document.getElementById('contact') as HTMLInputElement)?.value || '';
    const dob = (document.getElementById('Dob') as HTMLInputElement)?.value || '';
    const gender = (document.getElementById('gender') as HTMLSelectElement)?.value || ''; // Use HTMLSelectElement if it's a dropdown
    const education = (document.getElementById('education') as HTMLTextAreaElement)?.value || '';
    const experience = (document.getElementById('experience') as HTMLTextAreaElement)?.value || '';
    const skills = (document.getElementById('skills') as HTMLTextAreaElement)?.value || '';

    // Generate the editable resume HTML
    const ResumeHtml = `
      <h2><b><u>Editable Resume</u></b></h2>
      <h3><b>Personal Information</b></h3>
      <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
      <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
      <p><b>LinkedIn:</b> <span contenteditable="true">${linkedIn}</span></p>
      <p><b>Contact:</b> <span contenteditable="true">${phone}</span></p>
      <p><b>Date of Birth:</b> <span contenteditable="true">${dob}</span></p>
      <p><b>Gender:</b> <span contenteditable="true">${gender}</span></p>

      <h3><b>Education</b></h3>
      <p contenteditable="true">${education}</p>

      <h3><b>Experience</b></h3>
      <p contenteditable="true">${experience}</p>

      <h3><b>Skills</b></h3>
      <p contenteditable="true">${skills}</p>
    `;

    // Update the resume display
    if (resumeForm) {
      resumeForm.innerHTML = ResumeHtml;
    } else {
      console.error('Resume display container not found');
    }
  });
} else {
  console.error('Resume form not found');
}

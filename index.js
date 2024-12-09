// 
var myResume = document.getElementById('resume');
var resumeForm = document.getElementById('resume-Display');
if (myResume) {
    myResume.addEventListener('submit', function (event) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        event.preventDefault();
        // Retrieve form values
        var name = ((_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) || '';
        var email = ((_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value) || '';
        var linkedIn = ((_c = document.getElementById('linkedin')) === null || _c === void 0 ? void 0 : _c.value) || '';
        var phone = ((_d = document.getElementById('contact')) === null || _d === void 0 ? void 0 : _d.value) || '';
        var dob = ((_e = document.getElementById('Dob')) === null || _e === void 0 ? void 0 : _e.value) || '';
        var gender = ((_f = document.getElementById('gender')) === null || _f === void 0 ? void 0 : _f.value) || ''; // Use HTMLSelectElement if it's a dropdown
        var education = ((_g = document.getElementById('education')) === null || _g === void 0 ? void 0 : _g.value) || '';
        var experience = ((_h = document.getElementById('experience')) === null || _h === void 0 ? void 0 : _h.value) || '';
        var skills = ((_j = document.getElementById('skills')) === null || _j === void 0 ? void 0 : _j.value) || '';
        // Generate the editable resume HTML
        var ResumeHtml = "\n      <h2><b><u>Editable Resume</u></b></h2>\n      <h3><b>Personal Information</b></h3>\n      <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n      <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n      <p><b>LinkedIn:</b> <span contenteditable=\"true\">").concat(linkedIn, "</span></p>\n      <p><b>Contact:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n      <p><b>Date of Birth:</b> <span contenteditable=\"true\">").concat(dob, "</span></p>\n      <p><b>Gender:</b> <span contenteditable=\"true\">").concat(gender, "</span></p>\n\n      <h3><b>Education</b></h3>\n      <p contenteditable=\"true\">").concat(education, "</p>\n\n      <h3><b>Experience</b></h3>\n      <p contenteditable=\"true\">").concat(experience, "</p>\n\n      <h3><b>Skills</b></h3>\n      <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
        // Update the resume display
        if (resumeForm) {
            resumeForm.innerHTML = ResumeHtml;
        }
        else {
            console.error('Resume display container not found');
        }
    });
}
else {
    console.error('Resume form not found');
}

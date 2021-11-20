(this["webpackJsonpfinal-project-starter"]=this["webpackJsonpfinal-project-starter"]||[]).push([[0],{104:function(e,t,r){"use strict";r.r(t);var i=r(0),s=r.n(i),n=r(28),o=r.n(n),c=(r(89),r(90),r(6)),a=(r(91),r(114)),l=r(116),d=r(117),u=r(111),m=r(112),h=r(83),g=r(11),j=r(34),b=r(110),p=r(84),C=r(2),S=r(78),x=r(113),O=r(115),f=(r(92),r(1));function A(e){var t=e.course,r=e.newCode,i=e.setCode;return Object(f.jsx)(x.a,{children:Object(f.jsxs)(x.a.Group,{className:"mb-3",id:"editCourse.courseTitle",children:[Object(f.jsx)(x.a.Control,{as:"textarea",placeholder:t.code,rows:1,value:r,onChange:function(e){return i(e.target.value)}}),Object(f.jsx)(x.a.Text,{className:"text-muted",children:"Please enter the course's code here."})]})})}function I(e){var t=e.course,r=e.newTitle,i=e.setTitle;return Object(f.jsx)(x.a,{children:Object(f.jsxs)(x.a.Group,{className:"mb-3",id:"editCourse.courseTitle",children:[Object(f.jsx)(x.a.Control,{as:"textarea",placeholder:t.title,rows:3,value:r,onChange:function(e){return i(e.target.value)}}),Object(f.jsx)(x.a.Text,{className:"text-muted",children:"Please enter the course's title here."})]})})}function E(e){var t=e.course,r=e.newCredits,i=e.setCredits;return Object(f.jsx)(x.a,{children:Object(f.jsxs)(x.a.Group,{className:"mb-3",id:"editCourse.courseTitle",children:[Object(f.jsx)(x.a.Control,{as:"textarea",placeholder:t.credits,rows:1,value:r,onChange:function(e){return i(e.target.value)}}),Object(f.jsx)(x.a.Text,{className:"text-muted",children:"Please enter the course's credits here."})]})})}function y(e){var t=e.course,r=e.newDescription,i=e.setDescription;return Object(f.jsx)(x.a,{children:Object(f.jsxs)(x.a.Group,{className:"mb-3",id:"editCourse.courseDescription",children:[Object(f.jsx)(x.a.Control,{as:"textarea",placeholder:t.description,rows:5,value:r,onChange:function(e){return i(e.target.value)}}),Object(f.jsx)(x.a.Text,{className:"text-muted",children:"Please enter the course's description here."})]})})}function v(e){var t=e.showAddModal,r=e.setShowAddModal,s=e.addCourse,n=Object(i.useState)(""),o=Object(c.a)(n,2),a=o[0],l=o[1],d=Object(i.useState)(""),u=Object(c.a)(d,2),m=u[0],h=u[1],g=Object(i.useState)(""),j=Object(c.a)(g,2),b=j[0],p=j[1],C=Object(i.useState)(""),A=Object(c.a)(C,2),I=A[0],E=A[1],y=function(){return r(!1)};return Object(f.jsxs)(O.a,{show:t,onHide:y,children:[Object(f.jsx)(O.a.Header,{closeButton:!0,children:Object(f.jsx)(O.a.Title,{children:"Add New Course"})}),Object(f.jsx)(O.a.Body,{children:Object(f.jsxs)(x.a,{children:[Object(f.jsxs)(x.a.Group,{className:"mb-3",controlId:"addCourseForm.promptTextArea",children:[Object(f.jsx)(x.a.Label,{children:"Course Code"}),Object(f.jsx)(x.a.Control,{as:"textarea",placeholder:"CISC 275",rows:1,value:a,onChange:function(e){return l(e.target.value)}}),Object(f.jsx)(x.a.Text,{className:"text-muted",children:"Please enter the course's code here."})]}),Object(f.jsxs)(x.a.Group,{className:"mb-3",controlId:"addCourseForm.promptTextArea",children:[Object(f.jsx)(x.a.Label,{children:"Course Title"}),Object(f.jsx)(x.a.Control,{as:"textarea",placeholder:"Introduction to Software Enginerring",rows:3,value:m,onChange:function(e){return h(e.target.value)}}),Object(f.jsx)(x.a.Text,{className:"text-muted",children:"Please enter the course's title here."})]}),Object(f.jsxs)(x.a.Group,{className:"mb-3",controlId:"addCourseForm.promptTextArea",children:[Object(f.jsx)(x.a.Label,{children:"Course Credits"}),Object(f.jsx)(x.a.Control,{as:"textarea",placeholder:"3",rows:1,value:b,onChange:function(e){return p(e.target.value)}}),Object(f.jsx)(x.a.Text,{className:"text-muted",children:"Please enter the course's credits here."})]}),Object(f.jsxs)(x.a.Group,{className:"mb-3",controlId:"addCourseForm.promptTextArea",children:[Object(f.jsx)(x.a.Label,{children:"Course Description"}),Object(f.jsx)(x.a.Control,{as:"textarea",placeholder:"Object oriented software design and development through use of an object oriented programming language.",rows:5,value:I,onChange:function(e){return E(e.target.value)}}),Object(f.jsx)(x.a.Text,{className:"text-muted",children:"Please enter the course's description here."})]})]})}),Object(f.jsxs)(O.a.Footer,{children:[Object(f.jsx)(S.a,{variant:"outline-danger",onClick:function(){return r(!1)},children:"Cancel"}),Object(f.jsx)(S.a,{variant:"info",onClick:function(){s({code:a,title:m,credits:b,description:I}),y()},children:"Add"})]})]})}function B(e){var t=e.showRemoveModal,r=e.setShowRemoveModal,s=e.removeCourse,n=e.currentSemester,o=Object(i.useState)(""),a=Object(c.a)(o,2),l=a[0],d=a[1],u=function(){return r(!1)};return Object(f.jsxs)(O.a,{show:t,onHide:u,children:[Object(f.jsx)(O.a.Header,{closeButton:!0,children:Object(f.jsx)(O.a.Title,{children:"Remove Course"})}),Object(f.jsx)(O.a.Body,{children:Object(f.jsx)(x.a,{children:Object(f.jsxs)(x.a.Group,{className:"mb-3",controlId:"addCourseForm.promptTextArea",children:[Object(f.jsx)(x.a.Control,{placeholder:"Select a course to remove.",readOnly:!0}),Object(f.jsxs)(x.a.Select,{value:l,onChange:function(e){return d(e.target.value)},children:[n.courses.map((function(e){return Object(f.jsx)("option",{children:e.code},e.code)})),";"]}),Object(f.jsx)(x.a.Text,{className:"text-muted",children:"Select the course you would like removed from this drop-down menu."})]})})}),Object(f.jsxs)(O.a.Footer,{children:[Object(f.jsx)(S.a,{variant:"outline-danger",onClick:function(){return r(!1)},children:"Cancel"}),Object(f.jsx)(S.a,{variant:"warning",onClick:function(){s(l),u()},children:"Remove"})]})]})}function Q(e){var t=e.addSemester,r=Object(i.useState)(!1),s=Object(c.a)(r,2),n=s[0],o=s[1],a=function(){return o(!1)},l=Object(i.useState)(""),d=Object(c.a)(l,2),u=d[0],m=d[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)(S.a,{variant:"outline-dark",className:"m-3",onClick:function(){return o(!0)},children:"+"}),Object(f.jsxs)(O.a,{show:n,onHide:a,children:[Object(f.jsx)(O.a.Header,{closeButton:!0,children:Object(f.jsx)(O.a.Title,{children:"Add a Semester"})}),Object(f.jsx)(O.a.Body,{children:Object(f.jsx)(x.a,{children:Object(f.jsxs)(x.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(f.jsx)(x.a.Label,{children:"Semester"}),Object(f.jsxs)(x.a.Control,{as:"select",value:u,onChange:function(e){m(e.target.value)},children:[Object(f.jsx)("option",{value:"",children:"Select A Semester"}),Object(f.jsx)("option",{value:"Freshman Winter Semester",children:"Freshman Winter Semester"}),Object(f.jsx)("option",{value:"Freshman Summer Semester",children:"Freshman Summer Semester"}),Object(f.jsx)("option",{value:"Sophmore Winter Semester",children:"Sophmore Winter Semester"}),Object(f.jsx)("option",{value:"Sophmore Summer Semester",children:"Sophmore Summer Semester"}),Object(f.jsx)("option",{value:"Junior Winter Semester",children:"Junior Winter Semester"}),Object(f.jsx)("option",{value:"Junior Summmer Semester",children:"Junior Summer Semester"}),Object(f.jsx)("option",{value:"Senior Winter Semester",children:"Senior Winter Semester"}),Object(f.jsx)("option",{value:"Senior Summer Semester",children:"Senior Summer Semester"})]}),Object(f.jsx)(x.a.Text,{className:"text-muted",children:"Please choose a semester you would like to add here..."})]})})}),Object(f.jsxs)(O.a.Footer,{children:[Object(f.jsx)(S.a,{variant:"secondary",onClick:a,children:"Close"}),Object(f.jsx)(S.a,{variant:"primary",onClick:function(){t(u)},children:"Save Changes"})]})]})]})}function k(e){var t=e.removeSemester,r=Object(i.useState)(!1),s=Object(c.a)(r,2),n=s[0],o=s[1],a=function(){return o(!1)};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(S.a,{variant:"outline-dark",className:"m-3",onClick:function(){return o(!0)},children:"-"}),Object(f.jsxs)(O.a,{show:n,onHide:a,children:[Object(f.jsx)(O.a.Header,{closeButton:!0,children:Object(f.jsx)(O.a.Title,{children:"Please Read Carefully"})}),Object(f.jsxs)(O.a.Body,{children:["What you are about to do is delete the semester that you are currently on. If you want to cancel your action, either click on the ",Object(f.jsx)("b",{children:"X"})," in the corner or click ",Object(f.jsx)("b",{children:"Cancel"}),". However, if you would like to continue, please click ",Object(f.jsx)("b",{children:"Delete"})," Semester"]}),Object(f.jsxs)(O.a.Footer,{children:[Object(f.jsx)(S.a,{variant:"secondary",onClick:a,children:"Cancel"}),Object(f.jsx)(S.a,{variant:"danger",onClick:t,children:"Delete Semester"})]})]})]})}var w="scheduler_currentSemester",T="scheduler_semesterList";function H(e){var t=e.setShowAddModal,r=e.setShowRemoveModal,i=e.setEditing,s=e.clearSemester,n=e.hardReset,o=e.currentSemester,c=e.setCurrentSemester,a=e.semesterList,l=e.setSemesterList;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(f.jsx)(S.a,{variant:"secondary",className:"m-3",onClick:function(){t(!0)},children:"Add Course"}),Object(f.jsx)(S.a,{variant:"secondary",className:"m-3",onClick:function(){r(!0)},children:"Remove Course"}),Object(f.jsx)(S.a,{variant:"secondary",className:"m-3",onClick:function(){i(!0)},children:"Edit Course"}),Object(f.jsx)(S.a,{variant:"secondary",className:"m-3",onClick:function(){s()},children:"Clear Courses"})]}),Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(f.jsx)(D,{currentSemester:o,semesterList:a}),Object(f.jsx)(L,{currentSemester:o,setCurrentSemester:c,semesterList:a,setSemesterList:l}),Object(f.jsx)(S.a,{variant:"outline-danger",className:"m-3",onClick:function(){n()},children:"Reset to Default"})]})]})}function R(e){var t=e.course,r=e.setEditing,s=e.currentSemester,n=e.setCurrentSemester,o=Object(i.useState)(t.code),a=Object(c.a)(o,2),l=a[0],d=a[1],u=Object(i.useState)(t.title),m=Object(c.a)(u,2),h=m[0],g=m[1],j=Object(i.useState)(t.credits),b=Object(c.a)(j,2),p=b[0],x=b[1],O=Object(i.useState)(t.description),v=Object(c.a)(O,2),B=v[0],Q=v[1];return Object(f.jsx)("div",{children:Object(f.jsxs)("table",{className:"Table-Header",children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Course"}),Object(f.jsx)("th",{children:"Title"}),Object(f.jsx)("th",{children:"Credits"}),Object(f.jsx)("th",{children:"Description"}),Object(f.jsx)("th",{children:"Panel"})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:Object(f.jsx)(A,{course:t,newCode:l,setCode:d})}),Object(f.jsx)("td",{children:Object(f.jsx)(I,{course:t,newTitle:h,setTitle:g})}),Object(f.jsx)("td",{children:Object(f.jsx)(E,{course:t,newCredits:p,setCredits:x})}),Object(f.jsx)("td",{children:Object(f.jsx)(y,{course:t,newDescription:B,setDescription:Q})}),Object(f.jsxs)("td",{children:[Object(f.jsx)(S.a,{variant:"outline-danger",onClick:function(){d(t.code),g(t.title),x(t.credits),Q(t.description),r(!1)},children:"Cancel"}),Object(f.jsx)(S.a,{variant:"success",onClick:function(){n({title:s.title,courses:s.courses.map((function(e){return t.code===e.code?Object(C.a)(Object(C.a)({},e),{},{code:l,title:h,credits:p,description:B}):e}))}),r(!1)},children:"Done"})]})]})]})})}function D(e){var t=e.currentSemester,r=e.semesterList;return Object(f.jsx)(S.a,{variant:"outline-success",className:"m-3",onClick:function(){localStorage.setItem(w,JSON.stringify(t)),localStorage.setItem(T,JSON.stringify(r))},children:"Save Changes"})}function L(e){var t=e.currentSemester,r=e.setCurrentSemester,i=e.semesterList,s=e.setSemesterList;return Object(f.jsx)(S.a,{variant:"outline-warning",className:"m-3",onClick:function(){!function(){var e=localStorage.getItem(w),n=localStorage.getItem(T);if(null!==e&&null!==n){var o=JSON.parse(e),c=JSON.parse(n);r(o),s(c)}else{var a=JSON.parse(JSON.stringify(t)),l=JSON.parse(JSON.stringify(i));r(a),s(l)}}()},children:"Load Changes"})}var N=r(8),M=[{courses:[N[0],N[1],N[2],N[3],N[4]],title:"Freshman Fall Semester"},{courses:[N[5],N[6],N[7],N[8],N[9]],title:"Freshman Spring Semester"},{courses:[N[10],N[11],N[12],N[13],N[14]],title:"Sophmore Fall Semester"},{courses:[N[15],N[16],N[17],N[18],N[19]],title:"Sophmore Spring Semester"},{courses:[N[20],N[21],N[22],N[23],N[24]],title:"Junior Fall Semester"},{courses:[N[25],N[26],N[27],N[28],N[29]],title:"Junior Spring Semester"},{courses:[N[30],N[31],N[32],N[33],N[34]],title:"Senior Fall Semester"},{courses:[N[35],N[36],N[37],N[38],N[39]],title:"Senior Spring Semester"}];r(96);function P(e){var t=e.editing,r=e.setEditing,i=e.currentSemester,s=e.setCurrentSemester;return t?Object(f.jsx)("div",{children:i.courses.map((function(e){return Object(f.jsx)(R,{course:e,setEditing:r,currentSemester:i,setCurrentSemester:s},e.code)}))}):Object(f.jsxs)("table",{className:"Table-Header",children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Course"}),Object(f.jsx)("th",{children:"Title"}),Object(f.jsx)("th",{children:"Credits"}),Object(f.jsx)("th",{children:"Description"})]}),i.courses.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.code}),Object(f.jsx)("td",{children:e.title}),Object(f.jsx)("td",{children:e.credits}),Object(f.jsx)("td",{children:e.description})]},e.code)}))]})}function J(){var e=Object(i.useState)(M),t=Object(c.a)(e,2),r=t[0],s=t[1],n=Object(i.useState)(r[0]),o=Object(c.a)(n,2),a=o[0],l=o[1],d=Object(i.useState)(!1),u=Object(c.a)(d,2),m=u[0],h=u[1],g=Object(i.useState)(!1),C=Object(c.a)(g,2),S=C[0],x=C[1],O=Object(i.useState)(!1),A=Object(c.a)(O,2),I=A[0],E=A[1];function y(){var e=r.filter((function(e){return e!==a}));s(e),l(e[0])}return Object(f.jsxs)("div",{children:[Object(f.jsx)(W,{}),Object(f.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(f.jsx)(b.a,{id:"dropdown-basic-button",title:"Semesters",className:"m-3",children:r.map((function(e){return Object(f.jsx)(p.a.Item,{onClick:function(){return l(e)},children:e.title},e.title)}))})}),Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(f.jsx)(Q,{addSemester:function(e){s([].concat(Object(j.a)(r),[{title:e,courses:[]}]))}}),Object(f.jsx)(k,{removeSemester:y})]}),Object(f.jsx)(P,{editing:m,setEditing:h,currentSemester:a,setCurrentSemester:l}),Object(f.jsx)(H,{setShowAddModal:x,setShowRemoveModal:E,setEditing:h,clearSemester:function(){l({title:a.title,courses:a.courses.filter((function(e){return!e.code}))})},removeSemester:y,hardReset:function(){s(M),l({title:M[0].title,courses:M[0].courses})},currentSemester:a,setCurrentSemester:l,semesterList:r,setSemesterList:s}),Object(f.jsx)(v,{showAddModal:S,setShowAddModal:x,addCourse:function(e){l({title:a.title,courses:[].concat(Object(j.a)(a.courses),[e])})}}),Object(f.jsx)(B,{showRemoveModal:I,setShowRemoveModal:E,removeCourse:function(e){l({title:a.title,courses:a.courses.filter((function(t){return t.code!=e}))})},currentSemester:a})]})}var Y=r.p+"static/media/Team3_Logo.149f57ed.svg",q=r.p+"static/media/abeljuarez.83768d42.png",G=r.p+"static/media/renross.6d7ded54.png";function Z(){return Object(f.jsxs)("div",{children:[Object(f.jsxs)(a.a,{bg:"dark",variant:"dark",children:[Object(f.jsx)(a.a.Brand,{children:Object(f.jsx)("img",{alt:"Team 3 Logo",src:Y,width:"100",height:"100",className:"d-inline-block align-top"})}),Object(f.jsx)(a.a.Brand,{children:"UD CIS Semester Planner"}),Object(f.jsxs)(l.a,{className:"mr-auto",children:[Object(f.jsx)(l.a.Link,{href:"/ud-cis-scheduler-team-3/#/",children:"Welcome"}),Object(f.jsx)(l.a.Link,{href:"/ud-cis-scheduler-team-3/#/course-scheduler",children:"Course Scheduler"})]})]}),Object(f.jsx)(h.a,{basename:"/ud-cis-scheduler-team-3",children:Object(f.jsxs)(g.c,{children:[Object(f.jsx)(g.a,{exact:!0,path:"/course-scheduler",children:Object(f.jsx)(J,{})}),Object(f.jsx)(g.a,{exact:!0,path:"",children:Object(f.jsx)(F,{})})]})})]})}function F(){return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"m-5",style:{display:"flex",justifyContent:"center"},children:"Welcome to Team 3's UD CIS Scheduler!"}),Object(f.jsx)("p",{style:{display:"flex",justifyContent:"center"},children:"Our goal is to help CISC students plan out their semesters by providing templates of potential Fall/Spring semesters, and even Winter and Summer!"}),Object(f.jsx)("p",{style:{display:"flex",justifyContent:"center"},children:"This website will serve as a way for students to keep track of the classes they have taken and which ones they need to take next."}),Object(f.jsx)("p",{style:{display:"flex",justifyContent:"center"},children:"Students will get the option to remove a semester if they are not pleased with their schedule"}),Object(f.jsx)("p",{style:{display:"flex",justifyContent:"center"},children:"Students will be able to edit in classes in case our default schedules dont match theirs"}),Object(f.jsxs)("p",{style:{display:"flex",justifyContent:"center"},children:["Recommended 4 Year Path To Graduate on Time:",Object(f.jsx)("a",{href:"https://www.cis.udel.edu/wp-content/uploads/2018/10/COE_MajorSlicks_CISC_2018.pdf",children:"Suggested Plan"})]})]})})}function W(){var e=Object(i.useState)(!0),t=Object(c.a)(e,2),r=t[0],s=t[1];return Object(f.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(f.jsxs)(d.a,{show:r,onClose:function(){return s(!1)},children:[Object(f.jsx)(d.a.Header,{children:Object(f.jsx)("strong",{className:"me-auto",children:"Getting Started"})}),Object(f.jsx)(d.a.Body,{children:Object(f.jsxs)("p",{children:["The semester table below, and all semesters currently in the drop-down menu, are structured after the ",Object(f.jsx)("a",{href:"https://www.cis.udel.edu/wp-content/uploads/2018/10/COE_MajorSlicks_CISC_2018.pdf",children:"default Computer Science B.S plan"})," as designated by the UD College of Engineering. The blue ",Object(f.jsx)("b",{children:"Semesters"})," drop-down menu below will display all the semesters currently added to your plan, and you can select any of them to view the courses currently in that semester. Though the semesters \u2014 and the courses in them \u2014 are currently set to the default plan for a Computer Science B.S student, they can easily be manipulated to fit anyone\u2019s academic needs. For more information about how to use the scheduler, click on the help buttons below!"]})})]})})}function U(){return Object(f.jsx)("div",{children:Object(f.jsxs)(u.a,{variant:"light",style:{position:"fixed",bottom:"0",left:"0",right:"0"},children:[Object(f.jsx)("hr",{}),Object(f.jsx)("h5",{style:{display:"flex",justifyContent:"center"},children:"Meet The Team!"}),Object(f.jsx)("hr",{}),Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(f.jsxs)("div",{className:"Team",onClick:function(){return window.open("https://github.com/ahilynd","_blank")},children:[Object(f.jsx)(m.a,{alt:"Ahilyn Dipre GitHub Profile Picture",src:"data:image/png;base64,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",width:"30",height:"30",className:"mx-3",roundedCircle:!0}),"Ahilyn Dipre"]}),Object(f.jsxs)("div",{className:"Team",onClick:function(){return window.open("https://github.com/TheMexicanChico","_blank")},children:[Object(f.jsx)(m.a,{alt:"Abel Juarez GitHub Profile Picture",src:q,width:"30",height:"30",className:"mx-3",roundedCircle:!0}),"Abel Juarez"]}),Object(f.jsxs)("div",{className:"Team",onClick:function(){return window.open("https://github.com/renross","_blank")},children:[Object(f.jsx)(m.a,{alt:"Ren Ross GitHub Profile Picture",src:G,width:"30",height:"30",className:"mx-3",roundedCircle:!0}),"Ren Ross"]})]})]})})}var z=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(Z,{}),Object(f.jsx)(U,{})]})},V=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,118)).then((function(t){var r=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;r(e),i(e),s(e),n(e),o(e)}))};o.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(z,{})}),document.getElementById("root")),V()},8:function(e){e.exports=JSON.parse('[{"code":"CISC 108","title":"Introduction to Computer Science I","credits":"3","description":"Computing and principles of programming with an emphasis on systematic program design. Topics include functional programming, data abstraction, procedural abstraction, use of control and state, recursion, testing, and object-oriented programming concepts. Requires no prior programming experience, open to any major, but intended primarily for majors and minors in computer science or mathematics. COREQ: MATH115, MATH117, or higher math course or math placement. RESTRICTIONS: Students who received credit in CISC106 are not eligible to take this course without permission."},{"code":"EGGG 101","title":"Introduction to Engineering (FYE)","credits":"2","description":"Introduction to profession, including disciplines of chemical, civil, computer, electrical, environmental, and mechanical engineering. Prepares students for success through integration of: technical problem solving and engineering design, ethical decision-making, teamwork, and communicating to diverse audiences."},{"code":"MATH 241","title":"Analytic Geometry & Calculus A","credits":"4","description":"Functions, limits, continuity, derivatives. Polynomial, rational, exponential, hyperbolic, logarithmic, trigonometric and inverse trigonometric functions. Definite and indefinite integrals and the Fundamental Theorem of Calculus. Simple differential equations (separable ODE, linear ODE). ODE models leading to exponential growth and decay. PREREQ: MATH117 or acceptable score on the Math Placement Exam in accordance with current standards determined by the Department of Mathematical Sciences. See https://www.mathsci.udel.edu/courses-placement/ud-math-placement for more information. RESTRICTIONS: Students who received credit in MATH242 or MATH243 are not eligible to take this course without permission."},{"code":"ENGL 110","title":"Seminar in Composition","credits":"3","description":"Introduction to the process of academic writing that centers on the composition of analytical, research-based essays. RESTRICTIONS: Required of all students. Should be taken first year on campus."},{"code":"EDIT1","title":"Breath Requirement Elective 1","credits":"3","description":"Required of all students."},{"code":"CISC 181","title":"Introdction to Computer Science II","credits":"3","description":"Principles of computer science illustrated and applied through programming in an object oriented language. Programming projects illustrate computational problems, styles and issues that arise in computer systems development and in all application areas of computation. PREREQ: Grade of C- or better in CISC108 or CISC106. COREQ: MATH221, MATH241, or a higher level math course or math placement."},{"code":"CISC 210","title":"Introduction to Systems Programming","credits":"3","description":"Principles of computer systems programming for software and hardware platforms to achieve efficient resource usage. Topics include the C programming language, memory management, and awareness of system constraints and interfacing. Projects include programming embedded systems and interactive objects. PREREQ: A grade of C- or better in CISC106 or CISC108. COREQ: MATH221 or MATH241 or a higher level math course or math placement."},{"code":"MATH 242","title":"Analytic Geometry & Calculus B","credits":"4","description":"Brief review of MATH241; evaluation of limits by L Hospital s rule; applications of integration; integration techniques; parametric curves; polar coordinates; infinite sequences and series. Includes use of computers to perform symbolic, numerical and graphical analysis. PREREQ: MATH232 or MATH241. RESTRICTIONS: Students who received credit in MATH243 are not eligible to take this course without permission."},{"code":"EDIT2","title":"Laboratory Science I","credits":"4","description":"Required of all students. Any science with a lab"},{"code":"EDIT3","title":"Breath Requirement Elective 2","credits":"3","description":"Required of all students."},{"code":"CISC 220","title":"Data Structures","credits":"3","description":"Review of data type abstraction, recursion, arrays, stacks, queues, multiple stacks and linked lists. Emphasis on dynamic storage management, garbage collection, trees, graphs, tables, sorting and searching. PREREQ: A minimum grade of C- in CISC210. COREQ: MATH210 or MATH241."},{"code":"CISC 260","title":"Machine Org. & Assembly Language","credits":"3","description":"Introduction to the basics of machine organization. Programming tools and techniques at the machine and assembly levels. Assembly language programming and computer arithmetic techniques. PREREQ: A minimum grade of C- in CISC210."},{"code":"MATH 210","title":"Discrete Mathematics I","credits":"3","description":"Elements of sets and logic. Relations, functions. Integers. Induction and recursion. Principles and techniques of counting. Graphs. Paths and circuits COREQ: MATH241, MATH242 or MATH232"},{"code":"EDIT4","title":"Laboratory Science 2","credits":"4","description":"Required of all students. Any science with a lab"},{"code":"EDIT5","title":"Breath Requirement Elective 3","credits":"3","description":"Required of all students."},{"code":"CISC 355","title":"Computers, Ethics & Society","credits":"3","description":"Explains relationships among information technology, society and ethics by examining issues raised by increasingly widespread use of computers. Topics include ethics for computer professionals, computer impact on factory work, office work, personal privacy and social power distribution."},{"code":"CISC 275","title":"Introduction to Software Engineering","credits":"3","description":"Object oriented software design and development through use of an object oriented programming language. Topics include team programming, design patterns, graphical user interfaces, software engineering tools (e.g., integrated development environments, version control, build management, bug tracking, automated testing). PREREQ: Minimum grade of C- in CISC181 and CISC220."},{"code":"MATH 205 (or) MATH 350","title":"Statistical Methods (or) Probability Theory and Simulation Methods","credits":"3","description":"Descriptive statistics, graphical displays, sampling, variation, normal distribution, estimation, hypothesis testing, one-way analysis of variance, simple linear regression and goodness of fit. Laboratory covers use of statistical packages on mainframe and microcomputers. PREREQ: MATH210 or MATH230. RESTRICTIONS: Students who received credit in STAT200 or APEC408 are not eligible to take this course without permission. (or) Introduces the basic theory of discrete and continuous aspects of probability theory. Topics include bivariate distributions, sums of independent random variables, moment generating functions, laws of large numbers and central limit theorem. COREQ: MATH243. RESTRICTIONS: Requires basic knowledge of the counting principles in permutation and combination."},{"code":"EDIT6","title":"Laboratory Science 3","credits":"4","description":"Required of all students. Any science with a lab"},{"code":"EDIT7","title":"Breath Requirement Elective 4","credits":"3","description":"Required of all students."},{"code":"CISC 320","title":"Introduction to Algorithms","credits":"3","description":"Design and analysis of algorithms: worst/average case analysis, proofs for correctness and performance of algorithms. Algorithmic strategies (divide and conquer, greedy methods, dynamic programming, etc.). Algorithms for searching, forming and traversal of strings, trees and graphs. Categorization of computational problems: classes P and NP. NP completeness. PREREQ: MATH210 and a minimum grade of C- in CISC220."},{"code":"CISC 361","title":"Operating Systems","credits":"3","description":"Principles and techniques employed in the development of operating systems and their control programs. Includes management of memory, processors, I/O devices. PREREQ: A minimum grade of C- in both CISC220 and CISC260. CPEG222 may be substituted for CISC260 RESTRICTIONS: CISC360 recommended as a prerequisite."},{"code":"CISC 304 (or) MATH 349","title":"Logic and Programming (or) Elementary Linear Algebra","credits":"3","description":"Propositional and predicate logic for general reasoning and advanced applications in knowledge representation in artificial intelligence and database, program correctness and programming semantics. Models, resolution, logic programming, and natural deduction. PREREQ: CISC220, MATH210 (with minimum C- grade in both). (or) Systems of linear equations, linear combinations of vectors, and matrix algebra. Determinants, eigenvalues and eigenvectors, similarity and diagonalization of square matrices. Vector spaces, linear dependence and independence, basis and dimension, linear transformations. Inner product spaces, orthogonality, orthogonal projections, fundamental subspaces. A software package may be used for the analysis and solution of linear algebra problems. PREREQ: MATH230 or MATH242. RESTRICTIONS: Students who received credit in MATH342 or MATH351 are not eligible to take this course without permission."},{"code":"EDIT8","title":"Concentration Elective 1","credits":"4","description":"Required of all students. Concentration courses (Ex. Software Engineering, Cyber Security)"},{"code":"EDIT9","title":"General Elective 1","credits":"3","description":"Required of all students."},{"code":"CISC 372","title":"Parallel Computing","credits":"3","description":"Introduction to parallel computing concepts, methodologies, and tools. Programming and algorithmic techniques for code that will run simultaneously on parallel computing architectures. Topics include: single and multi-core parallelism, shared and distributed memory architectures, concurrency, program decomposition, data distribution, communication, load balancing, scalability, locality, granularity, debugging, performance evaluation. PREREQ: C- or better in both CISC 220 and CISC 260."},{"code":"CISC 303","title":"Automata Theory","credits":"3","description":"Automata and formal language theory. Background for advanced applications in compilers, computer networks, operating systems, and natural language processing. Finite automata and regular languages. Push down automata and context free grammars. Turing machines. PREREQ: A minimum grade of C- in both MATH210 and CISC220."},{"code":"ENGL 312 (or) ENGL 410","title":"Written Communication in Business (or) Technical Writing","credits":"3","description":"Examines the role of written communication in corporate decision making. Students write memos, letters, proposals and reports that simulate on-the-job communication tasks, and are encouraged to use materials from their fields of specialization. PREREQ: ENGL110. (or) Selected problems in technical communications, the preparation of reports and technical editing. PREREQ: ENGL110."},{"code":"EDIT10","title":"Concentration Elective 2","credits":"4","description":"Required of all students. Concentration courses (Ex. Software Engineering, Cyber Security)"},{"code":"EDIT11","title":"General Elective 2","credits":"3","description":"Required of all students."},{"code":"CISC 498 (or) UNIV 401","title":"Computer Science Design Project 1 (or) Senior Thesis (DLE & Capstone)","credits":"3","description":"First semester of two-semester senior software design course.  Students work in teams to develop solutions to real-world problems for a client.  Application of a modern software engineering process; requirement solicitation, analysis, and specification; prototyping; design; incremental development; testing and verification; client interaction; and presentation. Offered in Fall only. PREREQ: CISC275 and CISC320. (or) Senior thesis for students working toward a degree with distinction. RESTRICTIONS: Total credits for UNIV401 and UNIV402 not to exceed six."},{"code":"CISC 3XX (1)","title":"Computer Science Elective 1","credits":"3","description":"Required of all students."},{"code":"EDIT12","title":"Concentration Elective 3","credits":"4","description":"Required of all students. Concentration courses (Ex. Software Engineering, Cyber Security)"},{"code":"EDIT13","title":"General Elective 3","credits":"3","description":"Required of all students."},{"code":"EDIT14","title":"General Elective 4","credits":"3","description":"Required of all students."},{"code":"CISC 499 (or) UNIV 402","title":"Computer Science Design Project 2 (or) Senior Thesis (DLE & Capstone)","credits":"3","description":"Continuation of CISC 498. PREREQ: CISC498. (or) Continuation of UNIV401. RESTRICTIONS: Total credits for UNIV401 and UNIV402 not to exceed six."},{"code":"CISC 3XX (2)","title":"Computer Science Elective 2","credits":"3","description":"Required of all students."},{"code":"EDIT15","title":"Concentration Elective 4","credits":"4","description":"Required of all students. Concentration courses (Ex. Software Engineering, Cyber Security)"},{"code":"EDIT16","title":"General Elective 5","credits":"3","description":"Required of all students."},{"code":"EDIT17","title":"General Elective 6","credits":"3","description":"Required of all students."}]')},89:function(e,t,r){},90:function(e,t,r){},91:function(e,t,r){},96:function(e,t,r){}},[[104,1,2]]]);
//# sourceMappingURL=main.daae220f.chunk.js.map
(this["webpackJsonpfinal-project-starter"]=this["webpackJsonpfinal-project-starter"]||[]).push([[0],{46:function(e,t,r){},57:function(e,t,r){},58:function(e,t,r){},62:function(e,t,r){},64:function(e,t,r){},65:function(e,t,r){"use strict";r.r(t);var i=r(0),c=r.n(i),n=r(16),s=r.n(n),o=(r(57),r(21)),a=r(3),d=(r(58),r(48)),l=r(72),u=r(73),j=r(1);function b(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),r=t[0],c=t[1],n=function(){return c(!1)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d.a,{variant:"outline-primary",onClick:function(){return c(!0)},children:"+"}),Object(j.jsxs)(l.a,{show:r,onHide:n,children:[Object(j.jsx)(l.a.Header,{closeButton:!0,children:Object(j.jsx)(l.a.Title,{children:"More school ugh"})}),Object(j.jsx)(l.a.Body,{children:Object(j.jsx)(u.a,{children:Object(j.jsxs)(u.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(j.jsx)(u.a.Label,{children:"Semester"}),Object(j.jsx)(u.a.Control,{type:"text",placeholder:"Name of Semester"}),Object(j.jsx)(u.a.Text,{className:"text-muted",children:"Please add a semester here..."})]})})}),Object(j.jsxs)(l.a.Footer,{children:[Object(j.jsx)(d.a,{variant:"secondary",onClick:n,children:"Close"}),Object(j.jsx)(d.a,{variant:"primary",onClick:n,children:"Save Changes"})]})]})]})}r(46);var h=function(e){var t=e.title,r=e.setSelectedTab,c=e.index,n=e.selectedTab,s=Object(i.useCallback)((function(){r(c)}),[r,c]);return Object(j.jsx)("div",{className:"TabsCSS",children:Object(j.jsx)("li",{className:"li ".concat(n===c?"active":""),children:Object(j.jsx)("button",{onClick:s,children:t})})})},C=function(e){var t=e.children,r=Object(i.useState)(0),c=Object(a.a)(r,2),n=c[0],s=c[1];return Object(j.jsxs)("div",{className:"TabsCSS",children:[Object(j.jsx)("ul",{className:"ul",children:t.map((function(e,t){return Object(j.jsx)(h,{title:e.props.title,index:t,setSelectedTab:s,selectedTab:n},t)}))}),t[n]]})},m=r(7),O=(r(62),r(2));r(63);function x(e){var t=e.newCode,r=e.setCode;return Object(j.jsx)(u.a,{children:Object(j.jsx)(u.a.Group,{className:"mb-3",id:"editCourse.courseTitle",children:Object(j.jsx)(u.a.Control,{as:"textarea",rows:1,value:t,onChange:function(e){return r(e.target.value)}})})})}function p(e){var t=e.newTitle,r=e.setTitle;return Object(j.jsx)(u.a,{children:Object(j.jsx)(u.a.Group,{className:"mb-3",id:"editCourse.courseTitle",children:Object(j.jsx)(u.a.Control,{as:"textarea",rows:3,value:t,onChange:function(e){return r(e.target.value)}})})})}function S(e){var t=e.newCredits,r=e.setCredits;return Object(j.jsx)(u.a,{children:Object(j.jsx)(u.a.Group,{className:"mb-3",id:"editCourse.courseTitle",children:Object(j.jsx)(u.a.Control,{as:"textarea",rows:1,value:t,onChange:function(e){return r(e.target.value)}})})})}function f(e){var t=e.newDescription,r=e.setDescription;return Object(j.jsx)(u.a,{children:Object(j.jsx)(u.a.Group,{className:"mb-3",id:"editCourse.courseDescription",children:Object(j.jsx)(u.a.Control,{as:"textarea",rows:5,value:t,onChange:function(e){return r(e.target.value)}})})})}function v(e){var t=e.showAddModal,r=e.setShowAddModal,c=e.addCourse,n=Object(i.useState)("EX: CISC 275"),s=Object(a.a)(n,2),o=s[0],b=s[1],h=Object(i.useState)("EX: Introduction to Software Engineering"),C=Object(a.a)(h,2),m=C[0],O=C[1],x=Object(i.useState)("EX: 3"),p=Object(a.a)(x,2),S=p[0],f=p[1],v=Object(i.useState)("EX: Hi Dr. Bart"),g=Object(a.a)(v,2),E=g[0],T=g[1],I=function(){return r(!1)};return Object(j.jsxs)(l.a,{show:t,onHide:I,children:[Object(j.jsx)(l.a.Header,{closeButton:!0,children:Object(j.jsx)(l.a.Title,{children:"Add New Course"})}),Object(j.jsx)(l.a.Body,{children:Object(j.jsxs)(u.a,{children:[Object(j.jsxs)(u.a.Group,{className:"mb-3",controlId:"addCourseForm.promptTextArea",children:[Object(j.jsx)(u.a.Label,{children:"Course Code"}),Object(j.jsx)(u.a.Control,{as:"textarea",rows:1,value:o,onChange:function(e){return b(e.target.value)}})]}),Object(j.jsxs)(u.a.Group,{className:"mb-3",controlId:"addCourseForm.promptTextArea",children:[Object(j.jsx)(u.a.Label,{children:"Course Title"}),Object(j.jsx)(u.a.Control,{as:"textarea",rows:3,value:m,onChange:function(e){return O(e.target.value)}})]}),Object(j.jsxs)(u.a.Group,{className:"mb-3",controlId:"addCourseForm.promptTextArea",children:[Object(j.jsx)(u.a.Label,{children:"Course Credits"}),Object(j.jsx)(u.a.Control,{as:"textarea",rows:1,value:S,onChange:function(e){return f(e.target.value)}})]}),Object(j.jsxs)(u.a.Group,{className:"mb-3",controlId:"addCourseForm.promptTextArea",children:[Object(j.jsx)(u.a.Label,{children:"Course Description"}),Object(j.jsx)(u.a.Control,{as:"textarea",rows:5,value:E,onChange:function(e){return T(e.target.value)}})]})]})}),Object(j.jsxs)(l.a.Footer,{children:[Object(j.jsx)(d.a,{variant:"outline-danger",onClick:function(){return r(!1)},children:"Cancel"}),Object(j.jsx)(d.a,{variant:"info",onClick:function(){c({code:o,title:m,credits:S,description:E}),I()},children:"Add"})]})]})}function g(e){var t=e.showRemoveModal,r=e.setShowRemoveModal,c=e.removeCourse,n=Object(i.useState)("EX: CISC 108"),s=Object(a.a)(n,2),o=s[0],b=s[1],h=function(){return r(!1)};return Object(j.jsxs)(l.a,{show:t,onHide:h,children:[Object(j.jsx)(l.a.Header,{closeButton:!0,children:Object(j.jsx)(l.a.Title,{children:"Add New Course"})}),Object(j.jsx)(l.a.Body,{children:Object(j.jsx)(u.a,{children:Object(j.jsxs)(u.a.Group,{className:"mb-3",controlId:"addCourseForm.promptTextArea",children:[Object(j.jsx)(u.a.Label,{children:"Enter Course Code"}),Object(j.jsx)(u.a.Control,{as:"textarea",rows:1,value:o,onChange:function(e){return b(e.target.value)}})]})})}),Object(j.jsxs)(l.a.Footer,{children:[Object(j.jsx)(d.a,{variant:"outline-danger",onClick:function(){return r(!1)},children:"Cancel"}),Object(j.jsx)(d.a,{variant:"warning",onClick:function(){c(o),h()},children:"Remove"})]})]})}function E(e){var t=e.setShowAddModal,r=e.setShowRemoveModal,i=e.setEditing,c=e.clearSemester,n=e.removeSemester;return Object(j.jsxs)("div",{children:[Object(j.jsx)(d.a,{variant:"secondary",className:"me-3",onClick:function(){t(!0)},children:"Add Course"}),Object(j.jsx)(d.a,{variant:"secondary",className:"me-3",onClick:function(){r(!0)},children:"Remove Course"}),Object(j.jsx)(d.a,{variant:"secondary",className:"me-3",onClick:function(){i(!0)},children:"Edit Course"}),Object(j.jsx)(d.a,{variant:"secondary",className:"me-3",onClick:function(){c()},children:"Clear Courses"}),Object(j.jsx)(d.a,{variant:"secondary",className:"me-3",onClick:function(){n()},children:"Delete Semester"})]})}function T(e){var t=e.course,r=e.setEditing,c=e.currentSemester,n=e.setCurrentSemester,s=Object(i.useState)(t.code),o=Object(a.a)(s,2),l=o[0],u=o[1],b=Object(i.useState)(t.title),h=Object(a.a)(b,2),C=h[0],m=h[1],v=Object(i.useState)(t.credits),g=Object(a.a)(v,2),E=g[0],T=g[1],I=Object(i.useState)(t.description),w=Object(a.a)(I,2),y=w[0],R=w[1];return Object(j.jsx)("div",{children:Object(j.jsxs)("table",{className:"Table-Header",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Course"}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:"Credits"}),Object(j.jsx)("th",{children:"Description"}),Object(j.jsx)("th",{children:"Panel"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)(x,{newCode:l,setCode:u})}),Object(j.jsx)("td",{children:Object(j.jsx)(p,{newTitle:C,setTitle:m})}),Object(j.jsx)("td",{children:Object(j.jsx)(S,{newCredits:E,setCredits:T})}),Object(j.jsx)("td",{children:Object(j.jsx)(f,{newDescription:y,setDescription:R})}),Object(j.jsxs)("td",{children:[Object(j.jsx)(d.a,{variant:"outline-danger",onClick:function(){u(t.code),m(t.title),T(t.credits),R(t.description),r(!1)},children:"Cancel"}),Object(j.jsx)(d.a,{variant:"success",onClick:function(){n({title:c.title,courses:c.courses.map((function(e){return t.code===e.code?Object(O.a)(Object(O.a)({},e),{},{code:l,title:C,credits:E,description:y}):e}))}),r(!1)},children:"Done"})]})]})]})})}function I(e){var t=e.editing,r=e.setEditing,i=e.currentSemester,c=e.setCurrentSemester;return t?Object(j.jsx)("div",{children:i.courses.map((function(e){return Object(j.jsx)(T,{course:e,setEditing:r,currentSemester:i,setCurrentSemester:c},e.code)}))}):Object(j.jsxs)("table",{className:"Table-Header",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Course"}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:"Credits"}),Object(j.jsx)("th",{children:"Description"})]}),i.courses.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.code}),Object(j.jsx)("td",{children:e.title}),Object(j.jsx)("td",{children:e.credits}),Object(j.jsx)("td",{children:e.description})]},e.code)}))]})}r(64);var w=function(e){var t=e.handleClose,r=e.content,c=Object(i.useCallback)((function(){t()}),[t]);return Object(j.jsx)("div",{className:"PopUpBox",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("span",{className:"close",onClick:c,children:"x"}),r]})})},y=r(71),R=r(51);var A=function(){var e=[{courses:[m[0],m[1],m[2],m[3],m[4]],title:"Freshman Fall Semester"},{courses:[m[5],m[6],m[7],m[8],m[9]],title:"Freshman Spring Semester"},{courses:[m[10],m[11],m[12],m[13],m[14]],title:"Sophmore Fall Semester"},{courses:[m[15],m[16],m[17],m[18],m[19]],title:"Sophmore Spring Semester"},{courses:[m[20],m[21],m[22],m[23],m[24]],title:"Junior Fall Semester"},{courses:[m[25],m[26],m[27],m[28],m[29]],title:"Junior Spring Semester"},{courses:[m[30],m[31],m[32],m[33],m[34]],title:"Senior Fall Semester"},{courses:[m[35],m[36],m[37],m[38],m[39]],title:"Senior Spring Semester"}],t=Object(i.useState)(e),r=Object(a.a)(t,2),c=r[0],n=r[1],s=Object(i.useState)(c[0]),d=Object(a.a)(s,2),l=d[0],u=d[1],h=Object(i.useState)(!1),O=Object(a.a)(h,2),x=O[0],p=O[1],S=Object(i.useState)(!1),f=Object(a.a)(S,2),T=f[0],A=f[1],M=Object(i.useState)(!1),D=Object(a.a)(M,2),N=D[0],k=D[1],H=Object(i.useState)(!1),G=Object(a.a)(H,2),q=G[0],P=G[1],F=Object(i.useState)(c),L=Object(a.a)(F,2),B=L[0],Q=L[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"button",value:"Instructions",onClick:function(){P(!q)}}),Object(j.jsx)("p",{children:"Navigating Our Site"}),q&&Object(j.jsx)(w,{content:"Course Selector -> Choose Semester -> Make Necessary Semester Changes -> Add/Remove If Necessary",handleClose:function(){return P(!1)}}),Object(j.jsxs)(C,{children:[Object(j.jsx)("span",{title:"Welcome",children:Object(j.jsx)("body",{children:Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"Team 3s UD Cis Scheduler"}),Object(j.jsx)("p",{children:"Authors: Ren Ross, Abel Juarez, and Ahilyn Dipre"}),Object(j.jsx)("p",{children:"Our goal is to help CISC students plan out their semesters, by providing templates of potential Fall/Spring semesters and even Winter and Summer."}),Object(j.jsx)("p",{children:"This site will serve as a way for students to keep track of the classes they have taken and which ones they need to take next."}),Object(j.jsx)("p",{children:"Students will get the option to remove a Semester if they are not pleased with their schedule"}),Object(j.jsx)("p",{children:"Students will be able to edit in classes in case our default schedules dont match theirs"}),Object(j.jsxs)("p",{children:["Recommended 4 Year Path To Graduate on Time: ",Object(j.jsx)("a",{href:"https://www.cis.udel.edu/wp-content/uploads/2018/10/COE_MajorSlicks_CISC_2018.pdf",children:"Suggested Plan"})]}),Object(j.jsx)("h2",{children:"Created by: Ren Ross, Abel Juarez and Ahilyn Dipre"})]})})}),Object(j.jsxs)("span",{title:"Course Selector",children:[Object(j.jsxs)("p",{children:["The table below is a structured set of data made up of courses that most Computer Science B.S. majors have to take. This table allows you to quickly and easily look through all the semesters (Freshman to Senior). These semesters default to courses that are recommended by the ",Object(j.jsx)("a",{href:"https://www.cis.udel.edu/wp-content/uploads/2018/10/COE_MajorSlicks_CISC_2018.pdf",children:"4 Year Path "}),"to graduate on time (by the University of Delaware). However, the tables can be manipulated in a way that can fit anyone\u2019s academic needs."]}),Object(j.jsx)(y.a,{id:"dropdown-basic-button",title:"Semesters",children:c.map((function(e){return Object(j.jsx)(R.a.Item,{onClick:function(){return u(e)},children:e.title},e.title)}))}),Object(j.jsx)(b,{}),Object(j.jsx)("button",{className:"Set Default Semetester",onClick:function(){return Q(B)},children:"Reset"}),Object(j.jsx)(I,{editing:x,setEditing:p,currentSemester:l,setCurrentSemester:u}),Object(j.jsx)(E,{setShowAddModal:A,setShowRemoveModal:k,setEditing:p,clearSemester:function(){u({title:l.title,courses:l.courses.filter((function(e){return!e.code}))})},removeSemester:function(){var e=c.filter((function(e){return e!==l}));n(e),u(e[0])}}),Object(j.jsx)(v,{showAddModal:T,setShowAddModal:A,addCourse:function(e){u({title:l.title,courses:[].concat(Object(o.a)(l.courses),[e])})}}),Object(j.jsx)(g,{showRemoveModal:N,setShowRemoveModal:k,removeCourse:function(e){u({title:l.title,courses:l.courses.filter((function(t){return t.code!=e}))})}})]})]})]})},M=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,74)).then((function(t){var r=t.getCLS,i=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;r(e),i(e),c(e),n(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root")),M()},7:function(e){e.exports=JSON.parse('[{"code":"CISC 108","title":"Introdction to Computer Science I","credits":"3","description":"COREQ: MATH 115, MATH 117, or higher math course or math placement."},{"code":"EGGG 101","title":"Introduction to Engineering (FYE)","credits":"2","description":"First Year Experience"},{"code":"MATH 241","title":"Analytic Geometry & Calculus A","credits":"4","description":" MATH 117 or acceptable score on the Math Placement Exam in accordance with current standards determined by the Department of Mathematical Sciences. RESTRICTIONS: Students who received credit in MATH 242 or MATH 243 are not eligible to take this course without permission."},{"code":"ENGL 110","title":"Seminar in Composition","credits":"3","description":"Required of all students. Should be taken first year on campus"},{"code":"EDIT1","title":"Breath Requirement Elective 1","credits":"3","description":"Required of all students."},{"code":"CISC 181","title":"Introdction to Computer Science II","credits":"3","description":"PREREQ: Grade of C- or better in CISC108 or CISC106. COREQ: MATH221, MATH241, or a higher level math course or math placement."},{"code":"CISC 210","title":"Introduction to Systems Programming","credits":"3","description":"PREREQ: A grade of C- or better in CISC106 or CISC108. COREQ: MATH221 or MATH241 or a higher level math course or math placement."},{"code":"MATH 242","title":"Analytic Geometry & Calculus B","credits":"4","description":"PREREQ: MATH232 or MATH241. RESTRICTIONS: Students who received credit in MATH243 are not eligible to take this course without permission."},{"code":"EDIT2","title":"Laboratory Science I","credits":"4","description":"Required of all students. Any science with a lab"},{"code":"EDIT3","title":"Breath Requirement Elective 2","credits":"3","description":"Required of all students."},{"code":"CISC 220","title":"Data Structures","credits":"3","description":"PREREQ: A minimum grade of C- in CISC210. COREQ: MATH210 or MATH241."},{"code":"CISC 260","title":"Machine Org. & Assembly Language","credits":"3","description":"PREREQ: A minimum grade of C- in CISC210."},{"code":"MATH 210","title":"Discrete Mathematics I","credits":"3","description":"COREQ: MATH241, MATH242 or MATH232"},{"code":"EDIT4","title":"Laboratory Science 2","credits":"4","description":"Required of all students. Any science with a lab"},{"code":"EDIT5","title":"Breath Requirement Elective 3","credits":"3","description":"Required of all students."},{"code":"CISC 355","title":"Computers, Ethics & Society","credits":"3","description":"Explains relationships among information technology, society and ethics by examining issues raised by increasingly widespread use of computers."},{"code":"CISC 275","title":"Introduction to Software Engineering","credits":"3","description":"Explains relationships among information technology, society and ethics by examining issues raised by increasingly widespread use of computers."},{"code":"MATH 205 (or) MATH 350","title":"Statistical Methods (or) Probability Theory and Simulation Methods","credits":"3","description":""},{"code":"EDIT6","title":"Laboratory Science 3","credits":"4","description":"Required of all students. Any science with a lab"},{"code":"EDIT7","title":"Breath Requirement Elective 4","credits":"3","description":"Required of all students."},{"code":"CISC 320","title":"Introduction to Algorithms","credits":"3","description":"PREREQ: MATH210 and a minimum grade of C- in CISC220."},{"code":"CISC 361","title":"Operating Systems","credits":"3","description":"PREREQ: A minimum grade of C- in both CISC220 and CISC260. CPEG222 may be substituted for CISC260 RESTRICTIONS: CISC360 recommended as a prerequisite."},{"code":"CISC 304 (or) MATH 349","title":"Logic and Programming (or) Elementary Linear Algebra","credits":"3","description":""},{"code":"EDIT8","title":"Concentration Elective 1","credits":"4","description":"Required of all students. Concentration courses (Ex. Software Engineering, Cyber Security)"},{"code":"EDIT9","title":"General Elective 1","credits":"3","description":"Required of all students."},{"code":"CISC 372","title":"Parallel Computing","credits":"3","description":"PREREQ: C- or better in both CISC 220 and CISC 260."},{"code":"CISC 303","title":"Automata Theory","credits":"3","description":"PREREQ: A minimum grade of C- in both MATH210 and CISC220."},{"code":"ENGL 312 (or) ENGL 410","title":"Written Communication in Business (or) Technical Writing","credits":"3","description":""},{"code":"EDIT10","title":"Concentration Elective 2","credits":"4","description":"Required of all students. Concentration courses (Ex. Software Engineering, Cyber Security)"},{"code":"EDIT11","title":"General Elective 2","credits":"3","description":"Required of all students."},{"code":"CISC 498 (or) UNIV 401","title":"Computer Science Design Project 1 (or) Senior Thesis (DLE & Capstone)","credits":"3","description":""},{"code":"CISC 3XX (1)","title":"Computer Science Elective 1","credits":"3","description":"Required of all students."},{"code":"EDIT12","title":"Concentration Elective 3","credits":"4","description":"Required of all students. Concentration courses (Ex. Software Engineering, Cyber Security)"},{"code":"EDIT13","title":"General Elective 3","credits":"3","description":"Required of all students."},{"code":"EDIT14","title":"General Elective 4","credits":"3","description":"Required of all students."},{"code":"CISC 499 (or) UNIV 402","title":"Computer Science Design Project 2 (or) Senior Thesis (DLE & Capstone)","credits":"3","description":""},{"code":"CISC 3XX (2)","title":"Computer Science Elective 2","credits":"3","description":"Required of all students."},{"code":"EDIT15","title":"Concentration Elective 4","credits":"4","description":"Required of all students. Concentration courses (Ex. Software Engineering, Cyber Security)"},{"code":"EDIT16","title":"General Elective 5","credits":"3","description":"Required of all students."},{"code":"EDIT17","title":"General Elective 6","credits":"3","description":"Required of all students."}]')}},[[65,1,2]]]);
//# sourceMappingURL=main.440edab4.chunk.js.map
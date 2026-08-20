
document
.getElementById("registrationForm")
.addEventListener("submit", function(event){


    event.preventDefault();



    let photoFile =
    document.getElementById("photo").files[0];



    let signatureFile =
    document.getElementById("signature").files[0];



    let photoReader = new FileReader();

    let signatureReader = new FileReader();




    photoReader.onload = function(){


        let photoData = photoReader.result;



        signatureReader.onload = function(){


            let signatureData = signatureReader.result;



            let registrationData = {


                // Personal Information

                firstName:
                document.getElementById("fname").value,


                secondName:
                document.getElementById("sname").value,


                fatherName:
                document.getElementById("father").value,


                motherName:
                document.getElementById("mother").value,


                gender:
                document.getElementById("gender").value,


                dob:
                document.getElementById("dob").value,




                // Education Information

                education:[


                    {

                    qualification:
                    document.getElementById("q1").value,

                    institution:
                    document.getElementById("inst1").value,

                    board:
                    document.getElementById("board1").value,

                    year:
                    document.getElementById("year1").value,

                    marks:
                    document.getElementById("mark1").value

                    },



                    {

                    qualification:
                    document.getElementById("q2").value,

                    institution:
                    document.getElementById("inst2").value,

                    board:
                    document.getElementById("board2").value,

                    year:
                    document.getElementById("year2").value,

                    marks:
                    document.getElementById("mark2").value

                    },




                    {

                    qualification:
                    document.getElementById("q3").value,

                    institution:
                    document.getElementById("inst3").value,

                    board:
                    document.getElementById("board3").value,

                    year:
                    document.getElementById("year3").value,

                    marks:
                    document.getElementById("mark3").value

                    }


                ],




                // Actual Images

                photo: photoData,

                signature: signatureData



            };




            localStorage.setItem(

                "registrationData",

                JSON.stringify(registrationData)

            );



            window.location.href="success.html";



        };



        signatureReader.readAsDataURL(signatureFile);



    photoReader.readAsDataURL(photoFile);


});




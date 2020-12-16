// const { default: Swal } = require("sweetalert2");
$( document ).ready(function() {
    console.log( "LET'S GET READY TO RUMBLEEEEEEEEEEEEEEEEEEEE!" );
//To check-in
    $(".check-in-btn").on("click", function(){
        if($(this).text() === "Check-In"){
            const id = $(this).data("id");
            $(this).text("Check-Out");
            Swal.fire({
                    title: 'You have successfully checked into a room',
                    text: "Happy studying!",
                    icon: 'success',
                    timer: 3000
                })
                .then((result) => {
                    $.ajax({
                        method: "PUT",
                        data: {"status": true},
                        url: `/api/rooms/${id}`
                    })
                    .then((response) =>{
                        window.location.replace("/rooms");
                    });
                });
//To check-out
        }else if($(this).text() === "Check-Out"){
            console.log("checking-out now");
            const checkOutBtn = $(this).data("sanitize-id");
            Swal.fire({
                title: 'Leaving so soon?',
                text: "Are you sure you want to leave?",
                icon: 'question',
                showCancelButton: true,
                cancelButtonText: 'No, I want to stay',
                confirmButtonColor: '#4962B',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, exit room'
                }).then((result) =>{
                    if(result.isConfirmed){
                        $(this).text("Sanitize");
                        Swal.fire({
                            title: 'Good work! Click Sanitize to clean up the room for the next group.',
                            icon: 'success',
                            timer: 3000
                            })
                    }else{
                        $(this).text("Check-Out");
                        Swal.fire({
                            title: 'No worries,',
                            text: "Back to studying!",
                            icon: 'success',
                            timer: 2000
                        })

                    }
                })
    //To sanitize
        }else if($(this).text() === "Sanitize"){
            $(this).text("Check-In");
            Swal.fire({
                title: 'Commencing sanitization',
                text: "Click OK to begin room sterilization",
                icon: 'success',
                preConfirm: true,
                showLoaderOnConfirm: true,
                timer: 6000
            })
        }
        });
    });

          





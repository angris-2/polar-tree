document.addEventListener("DOMContentLoaded",
    function(e){
        function age() {
            var round = document.getElementById("round").value;
            var result = parseInt(round)/6+5;
            document.getElementById("round").value = result+"세";
        }

        let button=document.querySelector("button")
        button.addEventListener("click",
            function(e){
                age()
            }
        )
    
        button.addEventListener("mouseover",
            function(e){
                e.target.style.backgroundColor ="rgb(200, 130, 0)" 
            }
        )

        button.addEventListener("mouseleave",
            function(e){
                e.target.style.backgroundColor="orange"
            }
        )
    }
)


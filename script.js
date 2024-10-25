var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function open(tabname){
            for(tablink of tab-links){
                tablink.classlist.remove("active-link");
            }
            for(tabcontent of tabcontent){
                tabcontent.classlist.remove("active-tab");
            }
            event.currentTarget.classlist.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }
        var side = document.getElementById("sidemenu");
        function openmenu(){
            sidemenu.style.right = "0";
        }
        function closemenu(){
            sidemenu.style.right = "200px"
        }
        <script src="https://wzrd.in/standalone/formdata-polyfill"></script>
    <script src="https://wzrd.in/standalone/promise-polyfill@latest"></script>
    <script src="https://wzrd.in/standalone/whatwg-fetch@latest"></script>
    <script>
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzB9_6jSITmpsTzBHAg2hEQnxHC2flr8Du-lnsKN7ofGeWi1i7OQBr1XoREzyuxxpGblA/exec'
    const form = document.forms['submit-to-google-sheet']
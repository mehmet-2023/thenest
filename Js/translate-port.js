document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');


    // bu sayfada ara sayfalar için side bar içeren bir translate kısmı olucak



    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            // do this tr
            console.log('Checked');

            // header

            document.getElementById("he1").innerHTML = 'ㅤTakımımız';
            document.getElementById("he2").innerHTML = 'ㅤİçerikler';
            document.getElementById("he3").innerHTML = 'ㅤEgitimler';
            document.getElementById("he4").innerHTML = 'ㅤMakaleler';
            document.getElementById("he5").innerHTML = 'ㅤSunumlar';
            document.getElementById("he6").innerHTML = 'ㅤTasarımlar';
            document.getElementById("he7").innerHTML = 'ㅤHaberler';



            // sidebar

            document.getElementById("l1").innerHTML = 'ㅤMekanik';
            document.getElementById("l2").innerHTML = 'ㅤYazılım';
            document.getElementById("l3").innerHTML = 'ㅤPR';
            document.getElementById("l4").innerHTML = 'ㅤTasarım';
            document.getElementById("l5").innerHTML = 'ㅤElektronik';
            document.getElementById("l6").innerHTML = 'ㅤFRC';
            document.getElementById("l7").innerHTML = 'ㅤFYF';


        } else {
            // do that en
            console.log('Not checked');

            //header
            document.getElementById("he1").innerHTML = 'ㅤOur Team';
            document.getElementById("he2").innerHTML = 'ㅤContents';
            document.getElementById("he3").innerHTML = 'ㅤCourses';
            document.getElementById("he4").innerHTML = 'ㅤArticles';
            document.getElementById("he5").innerHTML = 'ㅤPresentations';
            document.getElementById("he6").innerHTML = 'ㅤDesigns';
            document.getElementById("he7").innerHTML = 'ㅤNews';



            // sidebar

            document.getElementById("l1").innerHTML = 'ㅤMechanic';
            document.getElementById("l2").innerHTML = 'ㅤSoftware';
            document.getElementById("l3").innerHTML = 'ㅤPR';
            document.getElementById("l4").innerHTML = 'ㅤDesign';
            document.getElementById("l5").innerHTML = 'ㅤElectronics';
            document.getElementById("l6").innerHTML = 'ㅤFRC';
            document.getElementById("l7").innerHTML = 'ㅤFYF';

        }

    });
});
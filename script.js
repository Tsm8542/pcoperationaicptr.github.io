function x(){
    var x = document.querySelector("#topic").value;
    var t = document.querySelector("#frame")
    switch(x){
        case 'mso2019o':
            t.src = 'Files/mso2019o.html';
            break;
        case 'cf':
            t.src = 'Files/cf.html';
            break;
        case 'w10os':
            t.src = 'Files/w10os.html';
            break;
        case 'msw2019':
            t.src = 'Files/msw2019.html';
            break;
        case 'mse2019':
            t.src = 'Files/mse2019.html';
            break;
        case 'mspp2019':
            t.src = 'Files/mspp2019.html';
            break;
        case 'msa2019':
            t.src = 'Files/msa2019.html';
            break;
        case 'mso2019':
            t.src = 'Files/mso2019.html';
            break;
        case 'iat':
            t.src = 'Files/iat.html';
            break;
        case 'sk':
            t.src = 'Files/sk.html';
            break;
        default:
            t.src = 'main.html';
            break;
    }
}
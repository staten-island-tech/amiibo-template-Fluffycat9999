import {elements} from "./elements";

elements.amiiboForm.addEventListener('keypress', function(event){
    if(event.keycode === 13){
        event.preventDefault();
        document.querySelector('.btn').click();
    }
});

function search(){
    elements.amiiboForm.addEventListener('submit', async function(e){
        e.preventDefault();
        const amiiboURL = '';
    });
}
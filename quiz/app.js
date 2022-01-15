
const quiz_db = {};

const btnContinue = document.getElementById('btn-continue');

function salvarSocore() {

    const porcetagem = document.getElementById('grade-percentage').innerText;
    const r_erros = document.getElementById('wrong-answers').innerText;
    const r_acertos = document.getElementById('right-answers').innerText;

    let _id = false;

    if (porcetagem != "" && r_erros != "" && r_acertos != ""){
        function new_score(_porcent, _erros, _acerto){
            _porcent = porcetagem+"%";
            _erros = r_erros;
            _acerto = r_acertos;
            const quiz_data = {
                _porcent: _porcent,
                _erros: _erros,
                _acerto: _acerto,
                createdat: firebase.database.ServerValue.TIMESTAMP
            }
    
            if(!_id){
                _id = firebase.database().ref().child('pontuacao').push().key;
            }
    
            let updates = {};
            updates['/pontuacao/' + _id] = quiz_data;
    
            let quiz_ref = firebase.database().ref();
    
            quiz_ref.update(updates)
                .then(function(){
                    return {success: true, message: 'Pontuação gravada com sucesso.'}
                })
                .catch(function(){
                    return {success: false, message: `Falhou ao tentar salvar a pontuação: ${error}`}
                });
        }
    
        quiz_db.new = new_score;
    
        quiz_db.new();
    }else{
        const success = "Falha!";
        const message = "Falhou ao tentar salvar pontuação: Campo(s) vazio(s) encontrado(s).";
        console.log(success, /\n/g, message);
    }

}

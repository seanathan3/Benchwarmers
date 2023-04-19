import './miniForm.css';

function handleSubmit(e) {
    e.preventDefault();
    
}

const MiniForm = () => {

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="sport" />
            <input type="text" placeholder="max capacity" />
            <input type="text" placeholder="skill level" />
            <button>Create Game</button>
        </form>
    )
};

export default MiniForm;
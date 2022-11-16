import { useState } from "react";
import axios from "axios";
import AllBeersPage from "./AllBeersPage"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function NewBeersPage() {
    const [reload, setReload] = useState();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "0",
        contributed_by: "",
    });

    function handleReload() {
        setReload(!reload);
    }

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await axios.post("https://ironbeer-api.fly.dev/new", form);
        setForm({
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: "0",
            contributed_by: "",
        });

        toast.success("Cerveja criada com sucesso! :D");
        navigate("/beers", { replace: true })
        handleReload();
    }

    return (
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" onChange={handleChange} value={form.name} />
                </div>

                <div>
                    <label>Tagline</label>
                    <input type="text" name="tagline" onChange={handleChange} value={form.tagline} />
                </div>

                <div>
                    <label>Description</label>
                    <input type="text" name="description" onChange={handleChange} value={form.description} />
                </div>
                <div>
                    <label>First Brewed</label>
                    <input type="text" name="first_brewed" onChange={handleChange} value={form.first_brewed}
                    />
                </div>
                <div>
                    <label>Attenuation Level</label>
                    <input type="number" min="0" name="attenuation_level" onChange={handleChange} value={form.attenuation_level}
                    />
                </div>
                <div>
                    <label>Contributed by</label>
                    <input type="text" name="contributed_by" onChange={handleChange} value={form.contributed_by}
                    />
                </div>

                <button onClick={handleSubmit}>Cadastrar Cerveja</button>
            </form>



            <AllBeersPage />

        </div>

    );
}

export default NewBeersPage;


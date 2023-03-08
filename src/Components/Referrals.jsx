import { Button, Container, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ReferralCard from "./ReferralCard";

const API_URL = 'http://71.178.217.118:3000';



function Referrals() {
    const [insurances, setInsurances] = useState([]);
    const [specialties, setSpecialties] = useState([]);
    const [preferredProviders, setPreferredProviders] = useState([]);
    const [selectedInsurance, setSelectedInsurance] = useState(null);
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);

    useEffect(() => {
        getInsurancesAndSpecialties();
    }, []);

    const getInsurancesAndSpecialties = async () => {
        const { data: _insurances } = await axios.get(`${API_URL}/insurances`);
        const { data: _specialties } = await axios.get(`${API_URL}/specialties`);
        setInsurances(_insurances.sort());
        setSpecialties(_specialties.sort());
    }

    const handleChangeSpecialty = ({ target: { value } }) => {
        setSelectedSpecialty(value);
    }

    const handleChangeInsurance = ({ target: { value } }) => {
        setSelectedInsurance(value);
    }

    const getPreferredProviders = async () => {
        const { data: _preferredProviders } = await axios.get(`${API_URL}/preferred_providers`, { params: { insurance: selectedInsurance, specialty: selectedSpecialty } });
        setPreferredProviders(_preferredProviders);
    }


    return (
        <Container style={{ minHeight: "90vh", textAlign: "center" }}>
            <FormControl style={{ marginBottom: "10px" }} fullWidth>
                <InputLabel id="insurances">Insurance</InputLabel>
                <Select
                    labelId="insurance-id"
                    id="insurances-select"
                    value={selectedInsurance}
                    label="Insurance"
                    onChange={handleChangeInsurance}
                >
                    {insurances.map(i => <MenuItem value={i}>{i}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl style={{ marginBottom: "10px" }} fullWidth>
                <InputLabel id="specialties">Specialty</InputLabel>
                <Select
                    labelId="specialty-id"
                    id="specialties-select"
                    value={selectedSpecialty}
                    label="Specialty"
                    onChange={handleChangeSpecialty}
                >
                    {specialties.map(s => <MenuItem value={s}>{s}</MenuItem>)}
                </Select>
            </FormControl>
            <Button
                onClick={getPreferredProviders}
                variant="outlined"
                disabled={!(selectedInsurance && selectedSpecialty)}>Submit</Button>

            {Boolean(preferredProviders.length) && <Container>
                {preferredProviders.map(p => <ReferralCard npi={p.npi} fullName={p.fullName} table={p.table} />)}
            </Container>}
        </Container>

    )
}

export default Referrals;
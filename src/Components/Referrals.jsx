import { Alert, Box, Button, Container, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ReferralCard from "./ReferralCard";

const API_URL = 'https://hansari.org';

function Referrals() {
    const [insurances, setInsurances] = useState([]);
    const [specialties, setSpecialties] = useState([]);
    const [preferredProviders, setPreferredProviders] = useState([]);
    const [allProviders, setAllProviders] = useState([]);
    const [selectedInsurance, setSelectedInsurance] = useState(null);
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);
    const [noPreferredProvidersFound, setNoPreferredProvidersFound] = useState(false);

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

    const handleSubmit = async () => {
        await getPreferredProviders();
        getAllProviders();
    }

    const getPreferredProviders = async () => {
        const { data: _preferredProviders } = await axios.get(`${API_URL}/preferred_providers`, { params: { insurance: selectedInsurance, specialty: selectedSpecialty } });
        setPreferredProviders(_preferredProviders);

        _preferredProviders.length ? setNoPreferredProvidersFound(false) : setNoPreferredProvidersFound(true);
    }

    const getAllProviders = async () => {
        const { data: _allProviders } = await axios.get(`${API_URL}/providers`, { params: { insurance: selectedInsurance, specialty: selectedSpecialty } });
        setAllProviders(_allProviders)
    }

    const otherProviders = allProviders.filter(({ npi }) => !preferredProviders.map(({ npi: _npi }) => _npi).includes(npi));


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
                sx={{ margin: "10px" }}
                onClick={handleSubmit}
                variant="outlined"
                disabled={!(selectedInsurance && selectedSpecialty)}>Search</Button>

            {noPreferredProvidersFound && <Alert severity="warning" sx={{ margin: "10px" }}>No Preferred Providers Found</Alert>}
            {Boolean(preferredProviders.length) && (
                <Container>
                    <Typography component="div" sx={{ textAlign: "left", textTransform: "uppercase" }}>Preferred Providers</Typography>
                    <Box>
                        {preferredProviders.map(p => <ReferralCard npi={p.npi} fullName={p.fullName} table={p.table} preferred />)}
                    </Box>
                </Container>
            )}

            {Boolean(otherProviders.length) && (
                <Container>
                    <Typography component="div" sx={{ textAlign: "left", textTransform: "uppercase" }}>Other Providers</Typography>
                    <Box>
                        {otherProviders.map(p => <ReferralCard npi={p.npi} fullName={p.fullName} table={p.table} />)}
                    </Box>
                </Container>
            )}
        </Container>

    )
}

export default Referrals;
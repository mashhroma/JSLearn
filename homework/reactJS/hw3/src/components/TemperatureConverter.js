import { TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';

export default function TemperatureConverter() {
    const [value, setValue] = useState({
        celsius: 0,
        fahrenheit: 32
    });

    const getCelsius = (e) => {
    const degrees = {
        celsius: (e.target.value-32) * 5 / 9,
        fahrenheit: e.target.value
    }
       setValue(degrees);

    }

    const getFahrenheit = (e) => {
        const degrees = {
            celsius: e.target.value,
            fahrenheit: e.target.value * 9 / 5 + 32
        }
        setValue(degrees);
    }

    const clear = (e) => {
        const degrees = {
            celsius: 0,
            fahrenheit: 32
        }
           setValue(degrees);
        }

    useEffect(() => {
        document.querySelector('#celsius').value = value.celsius;
       }, [value.celsius]);

       useEffect(() => {
        document.querySelector('#fahrenheit').value = value.fahrenheit;
    }, [value.fahrenheit]);

    return (
        <div>
            <h2>Задание 1: Температурный конвертер с Material UI</h2>
            <TextField
                style={{ margin: '20px' }}
                id="celsius"
                label="celsius"
                variant="outlined"
                onChange={getFahrenheit}
            />
            <TextField
                style={{ margin: '20px' }}
                id="fahrenheit"
                label="fahrenheit"
                variant="outlined"
                onChange={getCelsius}
            />
            <div>
                  <Button
                    variant="contained"
                    style={{ margin: '20px' }}
                    onClick={clear}>Очистить</Button>
            </div>   
        </div>
    )
}

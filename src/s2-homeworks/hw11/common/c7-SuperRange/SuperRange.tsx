import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент    - ok
                width: 148,
                color: '#01CB22',
                '& .MuiSlider-thumb': {
                    width: 18,
                    height: 18,
                    backgroundColor: '#FFFFFF',
                    border: '2px solid #01CB22',
                    '&:before': {
                        content: '""',
                        width: 6,
                        height: 6,
                        backgroundColor: '#01CB22',
                        borderRadius: '50%',
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                    }
                },
                '& .MuiSlider-track': {
                    backgroundColor: '#01CB22',
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

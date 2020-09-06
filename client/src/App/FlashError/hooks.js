import React, { useEffect } from 'react';

export const useFlashError = (errorMessage, handleClearErrorMessage) => {
    useEffect(() => {
        let timer;
        if (errorMessage) {
            timer = setTimeout(() => {
                handleClearErrorMessage()
            }, 5000)
        }

        return () => {
            clearTimeout(timer)
        }
    }, [errorMessage])
}

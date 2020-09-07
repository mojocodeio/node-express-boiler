export const CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE';
export const FLASH_ERROR_MESSAGE = 'FLASH_ERROR_MESSAGE';

export const handleClearErrorMessage = () => ({ type: CLEAR_ERROR_MESSAGE });

export const handleFlashErrorMessage = message => ({ type: FLASH_ERROR_MESSAGE, message })
export const API_KEY = 'AIzaSyAvd4hBgPDBkNLo3XWrEdfmh822Lb7rWxg'

export const value_converter = (value) => {
    if(value >= 1000000)
    {
        return Math.floor(value / 1000000) + "M";
    }
    else if(value >= 1000)
    {
        return Math.floor(value / 1000) + "K";
    }
    else {
        return value;
    }
}


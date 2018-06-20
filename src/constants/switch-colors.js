export default (colors, theme) => {
    switch(theme) {
        case 'light':
        colors[0] = '#f7f7f7'
        colors[1] = '#cccccc'
        colors[2] = '#505050'
        colors[3] = '#939fa5'
            break
        
        case 'dark':
            colors[0] = '#2d262d'
            colors[1] = '#9093ff'
            colors[2] = '#e0e0e0'
            colors[3] = '#686790'
            break

        case 'winter':
            colors[0] = '#d8d8d8'
            colors[1] = '#90c5c0'
            colors[2] = '#403d3d'
            colors[3] = '#007380'
            break

        case 'fall':
            colors[0] = '#ff8338'
            colors[1] = '#F44336'
            colors[2] = '#803c00'
            colors[3] = '#ffde5e'
            break
    }
}
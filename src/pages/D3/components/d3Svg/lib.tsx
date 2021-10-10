export const hoverChangeColor = (obj: any, dest: any, eventType: any, type: any, change: any) => {
    dest.on(eventType, (event: any) => {
        obj.select(event.target)
        .attr(type, change)
    })
}
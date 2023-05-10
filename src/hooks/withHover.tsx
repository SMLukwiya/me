import { useEffect, useRef, useState } from "react";


export default function withHover() {
    const [hovering, setHovering] = useState(false)
    const ref = useRef<HTMLElement>(null)

    const handleMouseIn = () => setHovering(true)
    const handleMouseOut = () => setHovering(false);

    useEffect(() => {
        const node = ref.current
        
        if (node) {
            node.addEventListener('mouseenter', handleMouseIn)
            node.addEventListener('mouseout', handleMouseOut)

            return () => {
                node.removeEventListener('mouseenter', handleMouseIn)
                node.removeEventListener('mouseout', handleMouseOut)
            }
        }

    }, [ref.current])

    return [ref, hovering]
}
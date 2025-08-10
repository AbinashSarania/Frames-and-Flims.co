// src/hooks/useInView.js
import { useEffect, useState, useRef } from "react";

export default function useInView(options = {}) {
    const ref = useRef(null);
    const [isInView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setInView(true);
            },
            { threshold: 0.1, ...options }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [options]);

    return [ref, isInView];
}

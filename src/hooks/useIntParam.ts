import { useParams } from 'react-router-dom';

export function useIntParam(paramName: string): number | undefined {
    const params = useParams();
    const validIntParam = params?.[paramName]?.match(/\d+/)?.input;
    if (!validIntParam) return;
    return parseInt(validIntParam);
}

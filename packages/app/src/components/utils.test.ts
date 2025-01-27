import {expect, test} from 'vitest';
import {mapToCssModules} from './utils';

test('should return the className string as-is if no cssModule is provided', () => {
    const result = mapToCssModules('btn primary', undefined);
    expect(result).toBe('btn primary');
});

test('should map className using the provided cssModule', () => {
    const cssModule = {btn: 'btn_123', primary: 'primary_456'};
    const result = mapToCssModules('btn primary', cssModule);
    expect(result).toBe('btn_123 primary_456');
});

test('should leave class names unchanged if they are not found in the cssModule', () => {
    const cssModule = {btn: 'btn_123'};
    const result = mapToCssModules('btn secondary', cssModule);
    expect(result).toBe('btn_123 secondary');
});

test('should handle an empty className string correctly', () => {
    const cssModule = {btn: 'btn_123'};
    const result = mapToCssModules('', cssModule);
    expect(result).toBe('');
});

test('should handle multiple spaces in the className string', () => {
    const cssModule = {btn: 'btn_123', primary: 'primary_456'};
    const result = mapToCssModules('btn primary', cssModule);
    expect(result).toBe('btn_123 primary_456');
});

test('should return an empty string if both className and cssModule are undefined', () => {
    const result = mapToCssModules(undefined, undefined);
    expect(result).toBe('');
});

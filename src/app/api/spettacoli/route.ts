'use server'

import { NextResponse } from 'next/server';
import { pool } from '@/app/api/conn';

export async function GET() {
    try {
        const result = await pool.query('SELECT * FROM spettacoli');
        const rows = result.rows;

        if (rows.length === 0) {
            return NextResponse.json({ error: 'Spettacoli non trovati' }, { status: 404 });
        }

        return NextResponse.json(rows, { status: 200 });
    } catch (error) {
        console.error('Errore durante l\'esecuzione della query:', error);
        return NextResponse.json({ error: 'Errore durante l\'esecuzione della query' }, { status: 500 });
    }
} 
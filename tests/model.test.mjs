import test from 'node:test';import assert from 'node:assert/strict';import{cents,calculate,validate}from'../dist/model.mjs';
const base={price:'950',shipping:'80',unknown:false,budget:'800',use:'Para ir a clases'};
test('adds shipping before comparing buyer budget',()=>{const r=validate(base);assert.equal(r.total,103000);assert.equal(r.difference,23000)});
test('unknown shipping never yields a final total or difference',()=>{const r=calculate({...base,unknown:true,shipping:''});assert.equal(r.total,null);assert.equal(r.difference,null)});
test('exact budget is zero difference',()=>assert.equal(calculate({...base,budget:'1030'}).difference,0));
test('currency uses cents rather than fractional float totals',()=>assert.equal(calculate({...base,price:'0.10',shipping:'0.20',budget:'0.30'}).difference,0));
test('invalid input is rejected',()=>{for(const v of['','-1','Infinity','1e4','123.456','100001','<script>'])assert.throws(()=>cents(v));assert.throws(()=>cents('0',false))});
test('empty and excessive purpose are rejected',()=>{for(const use of[' ','x'.repeat(301)])assert.throws(()=>validate({...base,use}))});
test('zero shipping is permitted and preserved',()=>assert.equal(calculate({...base,shipping:'0'}).total,95000));

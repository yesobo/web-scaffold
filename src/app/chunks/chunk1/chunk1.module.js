import angular from 'angular';
import { Chunk1Component } from './chunk1.component';

export const Chunk1Module = angular
  .module('chunk1', [])
  .component('chunk-1', Chunk1Component)
  .name;
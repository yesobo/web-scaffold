import angular from 'angular';
import { Chunk2Component } from './chunk2.component';

export const Chunk2Module = angular
  .module('chunk2', [])
  .component('chunk-2', Chunk2Component)
  .name;
import angular from 'angular';
import { Chunk3Component } from './chunk3.component';

export const Chunk3Module = angular
  .module('chunk3', [])
  .component('chunk-3', Chunk3Component)
  .name;
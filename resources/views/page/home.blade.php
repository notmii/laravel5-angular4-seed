@extends('base')
<nm-home-page></nm-home-page>

@push('scripts')
<script src="{{ mix('/assets/js/manifest.js' )}}"></script>
<script src="{{ mix('/assets/js/polyfills.js' )}}"></script>
<script src="{{ mix('/assets/js/vendor.js' )}}"></script>
<script src="{{ mix('/assets/js/app.js' )}}"></script>
@endpush
